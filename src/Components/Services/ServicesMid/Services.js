import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../ServicesMid/ServicesMidAssets/s1.jpg";
import image2 from "../ServicesMid/ServicesMidAssets/s2.jpg";
import image3 from "../ServicesMid/ServicesMidAssets/s3.jpg";

const servicesData = [
  {
    title: "Multi-location cloud attendance and Payroll solution",
    description:
      "Our Multi-location Cloud Attendance and Payroll Solution is a comprehensive system designed to streamline attendance tracking and payroll management for businesses with multiple locations. With this solution, companies can efficiently manage employee attendance, generate accurate payroll reports, and ensure compliance with labor regulations across all their branches or offices.",
    features: [
      {
        items: [
          {
            feature: "Centralized Attendance Tracking",
            detail:
              "Easily monitor attendance records of employees across multiple locations from a centralized dashboard. Gain real-time insights into attendance patterns, late arrivals, and absences to optimize workforce management.",
          },
          {
            feature: "Cloud-Based Platform",
            detail:
              "Access attendance and payroll data anytime, anywhere with secure cloud storage. Enjoy the flexibility of managing your workforce remotely while ensuring data security and integrity.",
          },
          {
            feature: "Integrated Payroll Management",
            detail:
              "Automate payroll processing for employees across all locations with seamless integration between attendance data and payroll calculations. Eliminate manual errors and ensure accurate and timely salary disbursement.",
          },
          {
            feature: "Customized Reporting",
            detail:
              "Generate comprehensive reports tailored to your business needs, including attendance summaries, overtime calculations, and payroll breakdowns by location or department. Analyze trends and make informed decisions to improve operational efficiency.",
          },
          {
            feature: "Scalable and Flexible",
            detail:
              "Our solution is scalable to accommodate the growing needs of your business, whether you have two locations or two hundred. Easily add new locations, departments, or employees as your business expands, without compromising on performance or reliability.",
          },
        ],
      },
    ],
    images: [image1, image2, image3],
  },
  {
    title: "Guard tour systems",
    description:
      "Our Guard Tour Systems offer a robust solution for managing security patrols across various locations, providing comprehensive surveillance and incident reporting capabilities. Utilizing advanced technology, these systems track and monitor security personnel as they perform their patrols, ensuring adherence to designated routes and timely response to incidents.",
    features: [
      {
        items: [
          {
            feature: "Automated patrol tracking",
            detail:
              " Utilizes RFID or NFC technology to automatically record patrol checkpoints, ensuring thorough surveillance coverage.",
          },
          {
            feature: "Real-time alerts and notifications",
            detail:
              "Organize and schedule classes, sessions, and appointments with ease, allowing members to book and attend sessions conveniently.",
          },
          {
            feature: "Customizable patrol routes",
            detail:
              " Allows for the creation of tailored patrol routes based on specific security requirements and site layouts.",
          },

          {
            feature: "Digital incident reporting",
            detail:
              "Enables security personnel to quickly and accurately report incidents, attaching photos or notes for detailed documentation and analysis.",
          },
          {
            feature: "Integration capabilities",
            detail:
              "Seamlessly integrates with other security systems such as CCTV cameras and access control systems, providing a unified security management platform for enhanced efficiency and effectiveness.",
          },
        ],
      },
    ],
    images: [image2, image3, image1],
  },
  {
    title: "Clocks manufacturing",
    description:
      "Our Clocks Manufacturing services provide high-quality, precision-engineered timekeeping solutions tailored to meet diverse needs across industries. With a focus on innovation and craftsmanship, we deliver reliable and aesthetically pleasing clocks that enhance both functionality and ambiance in various environments.",
    features: [
      {
        items: [
          {
            feature: "Customized design options",
            detail:
              "Offer a wide range of customizable clock designs to suit different architectural styles and interior aesthetics.",
          },

          {
            feature: "Advanced timekeeping technology",
            detail:
              " Incorporate cutting-edge clock mechanisms and synchronization methods for accurate timekeeping across multiple time zones and environments.",
          },

          {
            feature: "Durability and reliability",
            detail:
              " Utilize premium materials and manufacturing processes to ensure long-lasting performance and minimal maintenance requirements, even in challenging environments.",
          },
          {
            feature: "Energy efficiency",
            detail:
              "Prioritize energy-efficient designs and components to minimize power consumption and environmental impact.",
          },
          {
            feature: "Compliance and certification",
            detail:
              "Adhere to industry standards and regulations, obtaining necessary certifications to guarantee quality, safety, and compliance with regulatory requirements.",
          },
        ],
      },
    ],
    images: [image3, image1, image2],
  },
  {
    title: "Access control solution",
    description:
      "Our Access Control Solutions offer comprehensive security measures to regulate and monitor entry to premises effectively. Utilizing cutting-edge technology and robust systems, we provide customizable access control solutions tailored to meet the unique needs of businesses, institutions, and organizations.",
    features: [
      {
        items: [
          {
            feature: "Advanced authentication methods",
            detail:
              " Implement a range of authentication methods such as biometric recognition (fingerprint, facial recognition), smart cards, PIN codes, and mobile credentials to ensure secure access.",
          },
          {
            feature: "Centralized management",
            detail:
              " Employ centralized management systems that allow administrators to easily configure access permissions, track user activity, and generate reports for auditing and compliance purposes.",
          },
          {
            feature: "Integration capabilities",
            detail:
              " Seamlessly integrate access control systems with other security systems such as CCTV, alarms, and intercoms to create a comprehensive security ecosystem.",
          },

          {
            feature: "Scalability and flexibility",
            detail:
              "Offer scalable solutions that can adapt to the changing needs of businesses, from small offices to large enterprises, and flexible configurations to accommodate various access control scenarios.",
          },
          {
            feature: "Enhanced security features",
            detail:
              "Provide additional security features such as anti-passback, dual authentication, and intrusion detection to enhance the overall security posture of the premises.",
          },
        ],
      },
    ],
    images: [image2, image3, image1],
  },
  {
    title: "Vehicle Access control solution",
    description:
      "Our Vehicle Control Access Solutions offer efficient management of vehicular access to restricted areas, parking facilities, and premises. Using state-of-the-art technology and intelligent systems, we ensure seamless and secure control over vehicle entry and exit points.",
    features: [
      {
        items: [
          {
            feature: "Access authorization",
            detail:
              "Enable access authorization mechanisms such as proximity cards, key fobs, or mobile credentials to grant or deny access to vehicles based on predefined permissions.",
          },
          {
            feature: "Real-time monitoring",
            detail:
              " Utilize real-time monitoring and surveillance capabilities to track vehicle movements, detect unauthorized vehicles, and trigger alerts for immediate response.",
          },
          {
            feature: "Integration with security systems",
            detail:
              "Integrate vehicle access control systems with existing security infrastructure, including CCTV cameras, alarms, and access control systems, to enhance overall security and situational awareness.",
          },

          {
            feature: "Customizable configurations",
            detail:
              "Offer customizable configurations to accommodate various deployment scenarios, including parking lots, gated communities, industrial complexes, and commercial premises, with options for remote management and access control policies.",
          },
          {
            feature: "Automated gate systems",
            detail:
              "Implement automated gate systems equipped with plate recognition cameras, and barrier gates to streamline vehicle entry and exit processes.",
          },
        ],
      },
    ],
    images: [image2, image3, image1],
  },
];

function Services() {
  return (
    <div className="ServicesContainer m-1" id="services">
      <div className="row justify-content-center m-0 ">
        <div className="col-md-8">
          <div
            className="services-carousel"
            style={{ overflowY: "hidden", textAlign: "center" }}
          >
            {servicesData.map((service, index) => (
              <div key={index} className="text-center">
                <Carousel interval={6000}>
                  {service.images.map((image, imageIndex) => (
                    <Carousel.Item key={imageIndex} className="w-60">
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`ServiceImage ${index + 1} ${imageIndex + 1}`}
                        style={{ height: "50vh", margin: "auto" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>

                <div className="service-info">
                  <h3 className="service-info-heading">{service.title}</h3>
                  <p>{service.description}</p>


                  {service.features &&
                    service.features.map((featureGroup, featureGroupIndex) => (
                      <div key={featureGroupIndex}>
                        <ol
                          style={{ "--length": featureGroup.items.length }}
                          className="service-features"
                        >
                          {featureGroup.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              style={{ "--i": itemIndex + 1 }}
                            >
                              <h3 className="service-item-feature">
                                {item.feature}{" "}
                              </h3>
                              <p> {item.detail} </p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
