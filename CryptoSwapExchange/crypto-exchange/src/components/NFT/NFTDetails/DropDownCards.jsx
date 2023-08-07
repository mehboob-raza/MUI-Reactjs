import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import Button1 from "../../Button1";
import { FiSettings } from "react-icons/fi";
import { TbCell } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";

const Card = ({ logo, id, title, data }) => {
  const [isExpanded, setIsExpanded] = useState(id === 1);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      mt={6}
      sx={{
        // border: "1px solid #ccc",
        borderRadius: "10px",
        p: 2,
        // mb: 2,
        background: "#222252",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleToggleExpand}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {logo} {title}
        </Typography>
        {isExpanded ? (
          <FiArrowUp style={{ color: "#fff" }} />
        ) : (
          <FiArrowDown style={{ color: "#fff" }} />
        )}
      </Box>
      {isExpanded && (
        <Box sx={{ mt: 2 }}>
          {data.map((item, index) => (
            <Typography key={index}>
              {item.label ? (
                <Button1 variant="contained" color="primary">
                  {item.label}
                </Button1>
              ) : (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography sx={{ color: "#fff" }}>{item.h}</Typography>
                  <Typography sx={{ color: "#fff" }}>{item.p}</Typography>
                </Box>
              )}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

const DropDownCards = () => {
  const cardData = [
    {
      id: 1,
      title: "Manage Yours",
      logo: <FiSettings />,
      data: [
        {
          label: "Connect Your Wallet",
        },
      ],
    },
    {
      id: 2,
      title: "Properties",
      logo: <TbCell />,
      data: [
        {
          h: "BUNNY ID",
          p: "8(14.06%) ",
        },
      ],
    },
    {
      id: 3,
      title: "Details",
      logo: <AiOutlineSearch />,
      data: [
        {
          h: "CONTRACT ADDRESS",
          p: "0xDf7952B35f24 ",
        },
        {
          h: "IPFS JSON",
          p: "https://cloudflar... ",
        },
        {
          h: "SUPPLY COUNT",
          p: "127,191 ",
        },
        {
          h: "RARITY",
          p: "14.06% ",
        },
      ],
    },
  ];

  return (
    <Box>
      {cardData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          data={card.data}
          logo={card.logo}
        />
      ))}
    </Box>
  );
};

export default DropDownCards;
