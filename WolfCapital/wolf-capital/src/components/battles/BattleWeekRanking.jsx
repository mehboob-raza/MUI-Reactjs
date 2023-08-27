import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";

const styles = {
  tableCell: {
    borderBottom: "1px solid #323232", // Remove column border lines
    borderTop: "1px solid #323232", // Add row border
    backgroundImage: "transparent", // Gradient background
    color: "#ffffff", // Text color
    padding: "8px", // Cell padding
    fontWeight: "bold", // Font weight
  },
};

const data = [
  { id: 1, name: "DefiSnipz", lvl: "10", members: "123", price: "$10" },
  { id: 2, name: "Monarch team", lvl: "10", members: "123", price: "$15" },
];

const BattleWeekRanking = () => {
  return (
    <Box mt={6}>
      <Container>
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography variant="h5" mb={2} sx={{ color: "#fff" }}>
            All WolfPacks
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              background: "transparent",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={styles.tableCell}>Rank</TableCell>
                  <TableCell sx={styles.tableCell}>Wolfpack Name</TableCell>
                  <TableCell sx={styles.tableCell}>LVL</TableCell>
                  <TableCell sx={styles.tableCell}>Members</TableCell>
                  <TableCell sx={styles.tableCell}>Total Staked</TableCell>
                  <TableCell sx={styles.tableCell}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell sx={styles.tableCell}>{item.id}</TableCell>
                    <TableCell sx={styles.tableCell}>{item.name}</TableCell>
                    <TableCell sx={styles.tableCell}>{item.lvl}</TableCell>
                    <TableCell sx={styles.tableCell}>{item.members}</TableCell>
                    <TableCell sx={styles.tableCell}>{item.price}</TableCell>
                    <TableCell sx={styles.tableCell}>
                      <Button
                        // variant="contained"
                        sx={{ backgroundColor: "#505050", color: "#fff" }}
                      >
                        JOIN
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default BattleWeekRanking;
