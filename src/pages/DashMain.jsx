import { Copy } from "iconsax-react";
import React from "react";

const DashMain = () => {
  const data = [
    { name: "Leo Ojigbo",pos:"1" },
    { name: "Leo Marlian",pos:"2" },
    { name: "Leo Paste",pos:"2" },
    { name: "Leo Oriely",pos:"3" },
  ];
  return (
    <div
      style={{
        width: "90%",
        margin: "20px auto",
      }}
    >
      <div>
        <h1>DSF </h1>
        <small>Consultants Portal</small>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: "45%",
          }}
        >
          <h3>Team</h3>
          <div style={{marginTop:"20px", border:"1px solid #ddd", padding:"15px", borderRadius:"6px"}}>
            {data.map((mem) => (
              <p style={{fontSize:"12px", padding:"5px 0", display:"flex",justifyContent:"space-between"}}><span>{mem.name}</span> <span>Level  {mem?.pos}</span></p>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "50%",
            textAlign: "right",
          }}
        >
          <h6>Referral Link</h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "blue",
                textDecoration: "underline",
                marginRight: "3px",
              }}
            >
              www.dsfportal.com/register?ref=ojigboleo@gmail.com
            </span>

            <Copy size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
