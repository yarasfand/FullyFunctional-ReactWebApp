import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import image1 from "../ServicesMid/ServicesMidAssets/s1.jpg";
import image2 from "../ServicesMid/ServicesMidAssets/s2.jpg";
import image3 from "../ServicesMid/ServicesMidAssets/s3.jpg";

const servicesData = [
  {
    title: "Attendance and Payroll Management (Cloud)",
    description:
      "Our Attendance and Payroll Management (Cloud) service offers a comprehensive solution designed to streamline your company's attendance tracking and payroll processes efficiently and securely, all hosted on the cloud for accessibility and scalability.",
    features: [
      {
        items: [
          {
            feature: "Cloud-based Convenience",
            detail:
              "Our service operates entirely in the cloud, providing you with seamless access from anywhere, anytime. This means you can manage attendance and process payroll remotely, whether you're in the office, at home, or on the go.",
          },
          {
            feature: "Automated Attendance Tracking",
            detail:
              "Say goodbye to manual attendance tracking! Our system automates the process, capturing attendance data accurately and in real-time. This helps eliminate errors, ensures compliance with company policies, and provides valuable insights into employee attendance patterns.",
          },
          {
            feature: "Effortless Payroll Processing",
            detail:
              "With our service, payroll processing becomes a breeze. We offer automated payroll calculations, tax deductions, and direct deposit capabilities, saving you time and effort while ensuring accuracy and compliance with legal regulations.",
          },
          {
            feature: "Enhanced Employee Satisfaction",
            detail:
              "Provide your employees with a modern, user-friendly platform that simplifies attendance management and payroll-related tasks, leading to higher employee satisfaction and engagement.",
          },
          {
            feature: "Data-Driven Insights",
            detail:
              "Leverage the power of data analytics to gain actionable insights into your workforce, enabling you to make informed decisions and optimize resource allocation.",
          },
        ],
      },
    ],
    images: [image1, image2, image3],
  },
  {
    title: "Gym Management Solution (Cloud)",
    description:
      "Take your gym management to the next level with our Gym Management Solution (Cloud). Our comprehensive platform offers a range of features designed to enhance the efficiency and effectiveness of your gym operations, all accessible securely on the cloud.",
    features: [
      {
        items: [
          {
            feature: "Member Management",
            detail:
              "Efficiently manage your gym members, including registration, membership plans, attendance tracking, and member communications.",
          },
          {
            feature: "Class and Schedule Management",
            detail:
              "Organize and schedule classes, sessions, and appointments with ease, allowing members to book and attend sessions conveniently.",
          },
          {
            feature: "Billing and Payment Processing",
            detail:
              "Streamline billing processes and automate payment collections, reducing administrative overhead and improving cash flow.",
          },

          {
            feature: "Efficient Operations",
            detail:
              "Optimize your gym operations with streamlined processes for membership management, scheduling, billing, and staff coordination, saving time and resources.",
          },
          {
            feature: "Increased Revenue",
            detail:
              "Maximize revenue potential with automated billing and payment processing, effective member retention strategies, and data-driven pricing decisions.",
          },
          {
            feature: "Enhanced Staff Productivity",
            detail:
              "Empower your staff with tools to efficiently manage their tasks, communicate effectively, and focus on delivering exceptional service to members.",
          },
        ],
      },
    ],
    images: [image2, image3, image1],
  },
  {
    title: "Customized Software Solutions",
    description:
      "Our Customized Software Solutions are tailored to meet the unique needs of your business. Whether you require a bespoke application, database management system, or enterprise software suite, we can develop a solution that aligns with your objectives and enhances your operations. With our expertise in custom software development, we leverage the latest technologies and methodologies to create tailored solutions that address your specific requirements. Our solutions are designed to scale with your business and adapt to changing needs, ensuring long-term value and flexibility for your organization.",
    features: [
      {
        items: [
          {
            feature: "Custom Development",
            detail:
              "Tailored software solutions designed specifically for your business needs, ensuring optimal functionality and usability.",
          },

          {
            feature: "Integration Capabilities",
            detail:
              "Seamlessly integrate custom software with existing systems and platforms to streamline workflows and improve efficiency.",
          },


          {
            feature: "Advanced Functionality",
            detail:
              "Implement advanced features and capabilities to automate processes, improve decision-making, and drive innovation.",
          },
          {
            feature: "Security",
            detail:
              "Robust security measures are implemented to protect sensitive data and safeguard against cyber threats, ensuring compliance with regulatory standards.",
          },



          {
            feature: "Cost Savings",
            detail:
              " Customized solutions eliminate the need for multiple off-the-shelf software licenses and reduce reliance on manual processes, resulting in cost savings over time.",
          },
          {
            feature: "Competitive Advantage",
            detail:
              " Tailored software solutions give your business a competitive edge by aligning with unique requirements and enabling differentiation in the market.",
          },
          {
            feature: "Long-Term Value",
            detail:
              "Custom software solutions offer long-term value by adapting to changing business needs and evolving technology landscapes, ensuring continued relevance and functionality.",
          },
        ],
      },
    ],
    images: [image3, image1, image2],
  },
];

function Services() {
  return (
    <div className="ServicesContainer m-1">
      <div className="row justify-content-center m-0 ">
        <div className="col-md-8">
          <div
            className="services-carousel"
            style={{ overflowY: "hidden", textAlign: "center" }}
          >
            {servicesData.map((service, index) => (
              <div key={index} className="text-center">
                <Carousel 
                >
                  {service.images.map((image, imageIndex) => (
                    <Carousel.Item 
                    key={imageIndex}
                    className="w-60">
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={`ServiceImage ${index + 1} ${imageIndex + 1}`}
                        style={{ height: "65vh", margin: "auto" }}
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
