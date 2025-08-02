const nodemailer = require('nodemailer');

class EmailService {
  constructor() {
    // For development, create a test account
    this.isDevelopment = !process.env.EMAIL_USER || !process.env.EMAIL_PASS;
    
    console.log('📧 Email service initialization:');
    console.log('  EMAIL_USER:', process.env.EMAIL_USER ? 'configured' : 'not configured');
    console.log('  EMAIL_PASS:', process.env.EMAIL_PASS ? 'configured' : 'not configured');
    console.log('  isDevelopment:', this.isDevelopment);
    
    if (this.isDevelopment) {
      console.log('📧 Email service running in development mode - emails will be logged only');
      this.transporter = null;
    } else {
      this.transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: process.env.EMAIL_PORT || 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }
  }

  async sendContactNotification(contactData) {
    try {
      const { name, email, message, service } = contactData;
      
      const emailContent = {
        from: `"Ztart Landing" <${process.env.EMAIL_USER || 'noreply@ztart.com'}>`,
        to: process.env.EMAIL_USER || 'admin@ztart.com',
        subject: `Nuevo mensaje de contacto - ${service || 'General'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #9333ea;">Nuevo Mensaje de Contacto</h2>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Detalles del Contacto</h3>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
              <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            </div>
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #9333ea; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Mensaje</h3>
              <p style="line-height: 1.6; color: #555;">${message}</p>
            </div>
            <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
              <p>Este mensaje fue enviado desde el formulario de contacto de Ztart Landing Page</p>
            </div>
          </div>
        `,
        text: `
          Nuevo Mensaje de Contacto
          
          Nombre: ${name}
          Email: ${email}
          Servicio: ${service || 'No especificado'}
          Fecha: ${new Date().toLocaleString('es-ES')}
          
          Mensaje:
          ${message}
        `
      };

      if (this.isDevelopment) {
        // In development, just log the email
        console.log('📧 EMAIL NOTIFICATION (Development Mode):');
        console.log('From:', emailContent.from);
        console.log('To:', emailContent.to);
        console.log('Subject:', emailContent.subject);
        console.log('Message:', emailContent.text);
        console.log('---');
        
        return { success: true, messageId: 'dev-' + Date.now() };
      } else {
        // In production, send the actual email
        const info = await this.transporter.sendMail(emailContent);
        console.log('✅ Email enviado:', info.messageId);
        return { success: true, messageId: info.messageId };
      }
    } catch (error) {
      console.error('❌ Error enviando email:', error);
      return { success: false, error: error.message };
    }
  }

  async sendWelcomeEmail(userData) {
    try {
      const { name, email } = userData;
      
      const emailContent = {
        from: `"Ztart Team" <${process.env.EMAIL_USER || 'noreply@ztart.com'}>`,
        to: email,
        subject: '¡Bienvenido a Ztart!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #9333ea;">¡Bienvenido a Ztart!</h2>
            <p>Hola ${name},</p>
            <p>Gracias por registrarte en Ztart. Estamos emocionados de tenerte como parte de nuestra comunidad.</p>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Nuestros Servicios</h3>
              <ul style="color: #555;">
                <li>Ztart Pay - Plataforma de pagos digitales</li>
                <li>Ztart Broker - Trading e inversiones</li>
                <li>Ztart Ride - Servicios de transporte</li>
                <li>Ztart Home - Alquileres y hospedajes</li>
                <li>Ztart Work - Servicios profesionales</li>
                <li>Ztart Academy - Cursos en línea y trading</li>
              </ul>
            </div>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            <p>Saludos,<br>El equipo de Ztart</p>
          </div>
        `
      };

      if (this.isDevelopment) {
        console.log('📧 WELCOME EMAIL (Development Mode):');
        console.log('To:', emailContent.to);
        console.log('Subject:', emailContent.subject);
        console.log('---');
        
        return { success: true, messageId: 'dev-welcome-' + Date.now() };
      } else {
        const info = await this.transporter.sendMail(emailContent);
        console.log('✅ Welcome email enviado:', info.messageId);
        return { success: true, messageId: info.messageId };
      }
    } catch (error) {
      console.error('❌ Error enviando welcome email:', error);
      return { success: false, error: error.message };
    }
  }

  async sendPasswordResetEmail(userData, resetToken) {
    try {
      const { name, email } = userData;
      const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
      
      const emailContent = {
        from: `"Ztart Support" <${process.env.EMAIL_USER || 'noreply@ztart.com'}>`,
        to: email,
        subject: 'Restablecer Contraseña - Ztart',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #9333ea;">Restablecer Contraseña</h2>
            <p>Hola ${name},</p>
            <p>Has solicitado restablecer tu contraseña. Haz clic en el botón de abajo para continuar:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" style="background-color: #9333ea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Restablecer Contraseña
              </a>
            </div>
            <p>Si no solicitaste este cambio, puedes ignorar este email.</p>
            <p>Este enlace expirará en 1 hora.</p>
            <p>Saludos,<br>El equipo de Ztart</p>
          </div>
        `
      };

      if (this.isDevelopment) {
        console.log('📧 PASSWORD RESET EMAIL (Development Mode):');
        console.log('To:', emailContent.to);
        console.log('Subject:', emailContent.subject);
        console.log('Reset URL:', resetUrl);
        console.log('---');
        
        return { success: true, messageId: 'dev-reset-' + Date.now() };
      } else {
        const info = await this.transporter.sendMail(emailContent);
        console.log('✅ Password reset email enviado:', info.messageId);
        return { success: true, messageId: info.messageId };
      }
    } catch (error) {
      console.error('❌ Error enviando password reset email:', error);
      return { success: false, error: error.message };
    }
  }

  // Test email configuration
  async testConnection() {
    if (this.isDevelopment) {
      console.log('✅ Email service running in development mode');
      return true;
    }
    
    try {
      await this.transporter.verify();
      console.log('✅ Email service configurado correctamente');
      return true;
    } catch (error) {
      console.error('❌ Error en configuración de email:', error);
      return false;
    }
  }
}

module.exports = new EmailService();