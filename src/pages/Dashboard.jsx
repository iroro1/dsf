import { motion } from "framer-motion";
import { ArrowLeft2, ArrowRight2, Dash, Setting } from "iconsax-react";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [sideOpen, setSideOpen] = useState(true)
  const pathName= window.location.pathname
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: sideOpen ? "200px auto" : "0px auto",
        columnGap: "25px",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#6B0F1A",
          minHeight: "100vh",
          width: sideOpen ? "200px" : "0",
          padding: sideOpen && "15px",
        }}
      >
        <span
          style={{
            height: "30px",
            width: "30px",
            position: "absolute",
            top: "20px",
            right: sideOpen ? "-17px" : "-33px",
            background: "#fff",
            border: "2px solid #ddd",
            boxShadow:"3px -3px -3px #6B0F1A",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          {sideOpen ? (
            <ArrowLeft2 onClick={() => setSideOpen(false)} size={18} />
          ) : (
            <ArrowRight2 onClick={() => setSideOpen(true)} size={18} />
          )}
        </span>
        {sideOpen && (
          <>
            {" "}
            <h3
              style={{
                paddingBottom: "5px",
                borderBottom: "1px solid #eeeeee50",
              }}
              className="textWhite"
            >
              DSF
            </h3>
            <div
              style={{
                marginTop: "40px",
                fontSize: "12px",
              }}
              className="mt15 textWhite"
            >
              <motion.p
                animate={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  background: pathName.includes("dashboard")?"#fff": "transparent",
                  color: pathName.includes("dashboard") ?"#333":"#fff",
                  padding: "10px",
                  borderRadius: "6px",
                }}
                whileHover={{
                  background: "#fff",
                  color: "#333",
                }}
                exit={{
                  color: "#fff",
                  background: "transparent",
                }}
                className="mt15"
                onClick={() => navigate("/dashboard")}
              >
                {" "}
                <Dash size={16} />{" "}
                <span style={{ marginLeft: "5px" }}>Dashboard</span>{" "}
              </motion.p>

              <motion.p
                animate={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  background: pathName.includes("settings") ?"#fff": "transparent",
                  color: pathName.includes("settings")? "#333":"#fff",
                  padding: "10px",
                  borderRadius: "6px",
                }}
                whileHover={{
                  background: "#fff",
                  color: "#333",
                }}
                exit={{
                  color: "#fff",
                  background: "transparent",
                }}
                className="mt15"
                onClick={() => navigate("settings")}
              >
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Setting size={16} />{" "}
                  <span style={{ marginLeft: "5px", marginRight: "15px" }}>
                    Settings
                  </span>
                 
                </p>{" "}
              </motion.p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "5px",
                left: "5px",
                right: "5px",
                background: "#eee",
                height: "60px",
                borderRadius: "8px",
                padding: "10px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              <div>
                <h4>Leo Ojigbo</h4>
                <small onClick={() => navigate("/")}>Log Out</small>
              </div>
            </div>
          </>
        )}
      </div>

      <div
        style={{
          minHeight: "100vh",
          width: "90%",
          bottom: "10px",
          left: "20px",
          right: "20px",
          overflowY: "auto",
          margin: "auto",
        }}
      >
      <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
