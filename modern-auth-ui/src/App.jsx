import { useState } from 'react'
import './App.css'

function Register({ onLoginClick }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+1',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const countryCodes = [
    // North America
    { code: '+1', country: 'United States/Canada' },
    { code: '+52', country: 'Mexico' },
    { code: '+1', country: 'Puerto Rico' },
    
    // Central America & Caribbean
    { code: '+506', country: 'Costa Rica' },
    { code: '+503', country: 'El Salvador' },
    { code: '+502', country: 'Guatemala' },
    { code: '+504', country: 'Honduras' },
    { code: '+876', country: 'Jamaica' },
    { code: '+1868', country: 'Trinidad and Tobago' },
    
    // Europe
    { code: '+44', country: 'United Kingdom' },
    { code: '+33', country: 'France' },
    { code: '+49', country: 'Germany' },
    { code: '+34', country: 'Spain' },
    { code: '+39', country: 'Italy' },
    { code: '+31', country: 'Netherlands' },
    { code: '+351', country: 'Portugal' },
    { code: '+30', country: 'Greece' },
    { code: '+46', country: 'Sweden' },
    { code: '+47', country: 'Norway' },
    { code: '+45', country: 'Denmark' },
    { code: '+358', country: 'Finland' },
    { code: '+48', country: 'Poland' },
    { code: '+36', country: 'Hungary' },
    
    // Africa
    { code: '+20', country: 'Egypt' },
    { code: '+27', country: 'South Africa' },
    { code: '+234', country: 'Nigeria' },
    { code: '+254', country: 'Kenya' },
    { code: '+251', country: 'Ethiopia' },
    { code: '+212', country: 'Morocco' },
    { code: '+216', country: 'Tunisia' },
    { code: '+233', country: 'Ghana' },
    { code: '+225', country: 'Côte d\'Ivoire' },
    { code: '+256', country: 'Uganda' },
    { code: '+255', country: 'Tanzania' },
    { code: '+237', country: 'Cameroon' },
    { code: '+244', country: 'Angola' },
    { code: '+250', country: 'Rwanda' },
    { code: '+267', country: 'Botswana' },
    { code: '+260', country: 'Zambia' },
    { code: '+263', country: 'Zimbabwe' },
    { code: '+249', country: 'Sudan' },
    { code: '+241', country: 'Gabon' },
    { code: '+229', country: 'Benin' },
    
    // Middle East
    { code: '+971', country: 'United Arab Emirates' },
    { code: '+966', country: 'Saudi Arabia' },
    { code: '+962', country: 'Jordan' },
    { code: '+961', country: 'Lebanon' },
    { code: '+972', country: 'Israel' },
    { code: '+974', country: 'Qatar' },
    { code: '+968', country: 'Oman' },
    
    // Asia
    { code: '+91', country: 'India' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
    { code: '+65', country: 'Singapore' },
    { code: '+66', country: 'Thailand' },
    { code: '+84', country: 'Vietnam' },
    { code: '+60', country: 'Malaysia' },
    { code: '+63', country: 'Philippines' },
    { code: '+880', country: 'Bangladesh' },
    { code: '+977', country: 'Nepal' },
    { code: '+94', country: 'Sri Lanka' },
    { code: '+62', country: 'Indonesia' },
    { code: '+855', country: 'Cambodia' },
    { code: '+95', country: 'Myanmar' },
    
    // Oceania
    { code: '+61', country: 'Australia' },
    { code: '+64', country: 'New Zealand' },
    { code: '+679', country: 'Fiji' },
    { code: '+675', country: 'Papua New Guinea' },
    { code: '+685', country: 'Samoa' },
    
    // South America
    { code: '+55', country: 'Brazil' },
    { code: '+54', country: 'Argentina' },
    { code: '+57', country: 'Colombia' },
    { code: '+56', country: 'Chile' },
    { code: '+51', country: 'Peru' },
    { code: '+593', country: 'Ecuador' },
    { code: '+58', country: 'Venezuela' },
    { code: '+595', country: 'Paraguay' },
    { code: '+598', country: 'Uruguay' },
    { code: '+591', country: 'Bolivia' }
  ].sort((a, b) => a.country.localeCompare(b.country))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
  }

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
        />
        <div className="phone-input">
          <select 
            value={formData.countryCode || '+1'}
            onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
          >
            {countryCodes.map(country => (
              <option key={country.code} value={country.code}>
                {`${country.code}\u00A0\u00A0\u00A0\u00A0\u00A0${country.country}`}
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
        />
        <button type="submit">Register</button>
      </form>
      <p className="switch-form">
        Already have an account? <a href="#" onClick={onLoginClick}>Sign in</a>
      </p>
    </div>
  )
}

function ForgotPassword({ onBackToLogin }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset logic here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-container">
        <h1>Check Your Email</h1>
        <p className="message">
          We have sent a password reset link to your email address.
        </p>
        <button onClick={onBackToLogin}>Back to Login</button>
      </div>
    )
  }

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      <p className="subtitle">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p className="switch-form">
        <a href="#" onClick={onBackToLogin}>Back to Login</a>
      </p>
    </div>
  )
}

function Login({ onRegisterClick, onForgotPassword }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className="form-container">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <p className="forgot-password">
          <a href="#" onClick={onForgotPassword}>Forgot Password?</a>
        </p>
        <button type="submit">Sign in</button>
      </form>
      <p className="switch-form">
        Don't have an account? <a href="#" onClick={onRegisterClick}>Register</a>
      </p>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('register')

  const navigateToLogin = (e) => {
    e?.preventDefault()
    setCurrentPage('login')
  }

  const navigateToRegister = (e) => {
    e?.preventDefault()
    setCurrentPage('register')
  }

  const navigateToForgotPassword = (e) => {
    e?.preventDefault()
    setCurrentPage('forgot-password')
  }

  return (
    <div className="app">
      {currentPage === 'register' ? (
        <Register onLoginClick={navigateToLogin} />
      ) : currentPage === 'login' ? (
        <Login 
          onRegisterClick={navigateToRegister}
          onForgotPassword={navigateToForgotPassword}
        />
      ) : (
        <ForgotPassword onBackToLogin={navigateToLogin} />
      )}
    </div>
  )
}

export default App
