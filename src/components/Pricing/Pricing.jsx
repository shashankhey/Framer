import React from "react";
import "./Pricing.css";
import tick from "../../assets/tick.webp";
import tickWhite from "../../assets/tickWhite.webp";


const Pricing = () => {
  return (
    <div className="pricing-container">
      <div className="small-container">
        <div className="valueTag">
          <h5>Free</h5>
        </div>
        <div className="priceContainer">
          <div className="price">
            <h2>$0</h2>
          </div>
          <div className="month">
            <h5>/month</h5>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="btn">
            <div className="btn-text">
              <p>Get Started for free</p>
            </div>
          </div>
        </div>
        <div className="listContainer">
          <div className="list">
            <img src={tick} height={14} width={16} />
            <p>Up to 5 project members</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Unlimited tasks and projects</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>2GB storage</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Integrations</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Basic support</p>
          </div>
        </div>
      </div>
      <div className="medium-container">
        <div className="valueTag2">
          <div className="text">
            <h5>Pro</h5>
          </div>
          <div className="popularContainer">
            <div className="btnPopular">
              <div className="btn-text-popular">
                <p>Most popular</p>
              </div>
            </div>
          </div>
        </div>
        <div className="priceContainer2">
          <div className="price2">
            <h2>$0</h2>
          </div>
          <div className="month2">
            <h5>/month</h5>
          </div>
        </div>
        <div className="buttonContainer2">
          <div className="btn2">
            <div className="btnText2">
              <p>Sign up now</p>
            </div>
          </div>
        </div>
        <div className="listContainer2">
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />
            <p>Up to 50 project members</p>
          </div>
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />

            <p>Unlimited tasks and projects</p>
          </div>
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />

            <p>50GB storage</p>
          </div>
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />

            <p>Integrations</p>
          </div>
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />

            <p>Priority support</p>
          </div>
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />

            <p>Advanced analytics</p>
          </div>
          <div className="list2">
            <img src={tickWhite} height={14} width={16} />

            <p>Export capabilities</p>
          </div>
        </div>
      </div>
      <div className="small-container">
        <div className="valueTag">
          <h5>Business</h5>
        </div>
        <div className="priceContainer">
          <div className="price">
            <h2>$19</h2>
          </div>
          <div className="month">
            <h5>/month</h5>
          </div>
        </div>
        <div className="buttonContainer">
          <div className="btn">
            <div className="btn-text">
              <p>Sign up now</p>
            </div>
          </div>
        </div>
        <div className="listContainer">
          <div className="list">
            <img src={tick} height={14} width={16} />
            <p>Unlimited project members</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Unlimited tasks and projects</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>200GB storage</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Integrations</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Dedicated account manager</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Custom fields</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Advanced analytics</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Export capabilities</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>API access</p>
          </div>
          <div className="list">
            <img src={tick} height={14} width={16} />

            <p>Advanced security features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
