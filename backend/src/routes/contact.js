const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Validation rules
const contactValidation = [
  body('name').trim().isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Must be a valid email'),
  body('message').trim().isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
  body('service').optional().isIn(['ztart-pay', 'ztart-broker', 'ztart-ride', 'ztart-home', 'ztart-work', 'ztart-academy']).withMessage('Invalid service selected')
];

// POST /api/contact
router.post('/', contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const { name, email, message, service } = req.body;

    // TODO: Save to database
    // const contact = await Contact.create({ name, email, message, service });

    // TODO: Send email notification
    // await sendContactEmail({ name, email, message, service });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: `contact-${Date.now()}`,
        name,
        email,
        service,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit contact form'
    });
  }
});

// GET /api/contact (for admin)
router.get('/', async (req, res) => {
  try {
    // TODO: Add authentication middleware
    // TODO: Fetch contacts from database
    
    res.json({
      success: true,
      data: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

module.exports = router;