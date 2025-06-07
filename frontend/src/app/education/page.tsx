"use client";

import Header from './components/header/header';

// Example section component that you can duplicate for more content
const Section = ({ title, content, bgColor = '#ffffff', textColor = '#000000' }) => {
  return (
    <section style={{
      padding: '4rem 2rem',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor,
      color: textColor,
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ 
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        {title}
      </h2>
      <div style={{ 
        maxWidth: '800px',
        width: '100%',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        lineHeight: 1.6
      }}>
        {content}
      </div>
    </section>
  );
};

export default function Education() {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      width: '100vw', 
      maxWidth: '100%',
      overflowX: 'hidden',
      overflowY: 'auto', // Allow vertical scrolling
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <Header />
      
      {/* Example content sections - add more as needed */}
      <Section 
        title="Our Educational Approach" 
        content={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
          nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec ultricies 
          lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl.</p>}
        bgColor="#f8f9fa"
      />
      
      <Section 
        title="Programs Offered" 
        content={<div>
          <p>We offer a wide range of educational programs designed to meet diverse learning needs.</p>
          <ul style={{ marginTop: '1rem', paddingLeft: '2rem' }}>
            <li>K-12 Learning Support</li>
            <li>College Preparation</li>
            <li>Professional Development</li>
            <li>Technical Training</li>
          </ul>
        </div>}
        bgColor="#e9ecef"
      />
      
      {/* Add more sections as needed - they will be scrollable */}
    </div>
  );
}