import { CloseCircle, Copy } from "iconsax-react";
import React, { useState } from "react";
import { copyToClipBoard } from "../checkUtils";
import { motion } from "framer-motion";
const DashMain = () => {
  const data = [
    { name: "Leo Ojigbo", pos: "1" },
    { name: "Leo Marlian", pos: "2" },
    { name: "Leo Paste", pos: "2" },
    { name: "Leo Oriely", pos: "3" },
  ];
  const [copied, setCopied] = useState("");
  return (
    <div
      style={{
        width: "90%",
        margin: "20px auto",
      }}
    >
      {copied !== "" && (
        <motion.div
          animate={{
            position: "absolute",
            minWidth: "200px",
            minHeight: "40px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "5px",
            right: "10px",
            top: "10px",
            zIndex: "20",
            fontSize: "12px",
            padding: "5px",
            color: "blue",
            cursor: "default",
          }}
          onDoubleClick={() => setCopied("")}
        >
          <span
            style={{
              display: "block",
              textAlign: "right",
              marginTop: "10px",
            }}
          >
            <CloseCircle
            color="red"
              onClick={() => setCopied("")}
            />

          </span>
          {copied}
       
        </motion.div>
      )}
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
          <div
            style={{
              marginTop: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "6px",
            }}
          >
            {data.map((mem) => (
              <p
                style={{
                  fontSize: "12px",
                  padding: "5px 0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{mem.name}</span> <span>Level {mem?.pos}</span>
              </p>
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

            <Copy
              onClick={() => {
                setCopied("www.dsfportal.com/register?ref=ojigboleo@gmail.com");
                copyToClipBoard(
                  "www.dsfportal.com/register?ref=ojigboleo@gmail.com"
                );
              }}
              size={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashMain;
