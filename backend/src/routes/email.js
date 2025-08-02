const express = require('express');
const router = express.Router();
const emailService = require('../utils/emailService');

// POST /api/email/test
router.post('/test', async (req, res) => {
  try {
    const { to, subject, message } = req.body;
    
    // Test email configuration
    const isConfigured = await emailService.testConnection();
    
    if (!isConfigured) {
      return res.status(500).json({
        success: false,
        message: 'Email service not configured properly'
      });
    }

    // Send test email
    const testData = {
      name: 'Test User',
      email: to || process.env.EMAIL_USER,
      message: message || 'This is a test email from Ztart Landing Page',
      service: 'test'
    };

    const result = await emailService.sendContactNotification(testData);
    
    if (result.success) {
      res.json({
        success: true,
        message: 'Test email sent successfully',
        messageId: result.messageId
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send test email',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Email test error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/email/status
router.get('/status', async (req, res) => {
  try {
    const isConfigured = await emailService.testConnection();
    
    res.json({
      success: true,
      configured: isConfigured,
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER ? 'configured' : 'not configured'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      configured: false,
      error: error.message
    });
  }
});

module.exports = router;