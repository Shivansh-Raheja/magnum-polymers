import React, { useEffect } from 'react';
import './Cetifications.css';  // Assuming the CSS is in this file

const Certifications = () => {

  useEffect(() => {
    // Adding the visible class to make animations work
    const items = document.querySelectorAll('.machining-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 300); // Delay the visibility of each item
    });
  }, []);

  return (
    <div className="machining-container">
      <h1 className="page-heading">Our Certifications</h1>

      <div className="machining-item">
        <div className="machining-content">
          <div className="machining-image">
            <img src="/cert1.png" alt="Maruti ACE Certification" />
          </div>
          <div className="machining-text">
            <h2>Maruti ACE Certification</h2>
            <p>
              We are proud to be certified by Maruti ACE, a recognition of our commitment to delivering high-quality automotive parts. This certification validates our strict adherence to manufacturing standards that meet Maruti's rigorous quality requirements. It showcases our capability in producing components that meet the precise specifications of the automotive industry.
              <br /><br />
              As part of this certification, we continually strive to improve the performance and reliability of our products. This certification strengthens our position as a trusted supplier in the automotive sector, particularly in the production of essential vehicle components.
            </p>
          </div>
        </div>
      </div>

      <div className="machining-item right">
        <div className="machining-content">
          <div className="machining-image">
            <img src="/Certificate for IATF 16949-2016 - MAGNUM POLYMERS_page-0001.jpg" alt="IATF BSI Certificate of Registration" />
          </div>
          <div className="machining-text">
            <h2>IATF BSI Certificate of Registration</h2>
            <p>
              We are proud to have received the IATF 16949:2016 Certificate of Registration from BSI, which demonstrates our dedication to the highest standards of quality management in the automotive industry. The IATF certification is globally recognized and is awarded to organizations that meet the stringent requirements of automotive quality management systems.
              <br /><br />
              Achieving this certification reflects our ongoing commitment to continuous improvement, customer satisfaction, and delivering high-quality products. Our team works diligently to maintain the highest quality standards through our comprehensive quality management systems and processes.
            </p>
          </div>
        </div>
      </div>

      <div className="machining-item">
        <div className="machining-content">
          <div className="machining-image">
            <img src="/EMS CERTIFICATE_page-0001.jpg" alt="IAF Environmental Management System Certification" />
          </div>
          <div className="machining-text">
            <h2>IAF Environmental Management System Certification</h2>
            <p>
              Our IAF-certified Environmental Management System (EMS) certification emphasizes our commitment to sustainability and responsible environmental practices. This certification is a reflection of our dedication to managing our environmental impacts and aligning with global standards for environmental responsibility.
              <br /><br />
              The IAF certification helps ensure that we are minimizing our environmental footprint while maintaining operational efficiency. Through continuous monitoring and improvements, we ensure compliance with the highest environmental standards, ensuring that all our processes, from manufacturing to product delivery, follow eco-friendly practices. This certification affirms our commitment to creating a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
