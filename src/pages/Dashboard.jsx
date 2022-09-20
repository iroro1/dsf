import { Dash, Setting } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "200px auto",
        columnGap: "25px",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#6B0F1A",
          minHeight: "100vh",
          width: "200px",
          padding: "15px",
        }}
      >
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
              background: "transparent",
              padding:"10px",
              borderRadius:"6px"


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
              background: "transparent",
              padding:"10px",
              borderRadius:"6px"


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
            coming...
          </p> </motion.p>

      
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
      </div>

      <div
        style={{
          minHeight: "100vh",
          width: "90%",
          bottom: "10px",
          left: "10px",
          right: "10px",
          overflowY: "auto",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        magni ipsa debitis quas omnis ea eaque doloremque incidunt. Quia
        consequatur veritatis inventore architecto id rerum sed doloribus eum
        maxime quod.
      </div>
    </div>
  );
};

export default Dashboard;
