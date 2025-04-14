import {
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
    Button,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Select,
    MenuItem,
    CircularProgress,
    TablePagination,
    IconButton
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, {useState, useEffect} from "react";
import {getAllUsers, deleteUser} from "../../api/UserApi.ts";
import {registerUser} from "../../api/AuthApi.ts";

export function ManageUsersComponent() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await getAllUsers();
            setUsers(data.data);
        } catch (err: any) {
            setError(err?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleChangePage = (_event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleAddUser = async () => {
        if (!name || !email || !role || !password) {
            setError("All fields are required.");
            return;
        }

        setIsLoading(true);
        try {
            await registerUser(name, email, password, role);
            fetchUsers();
            setOpenDialog(false);
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setRole("");
        } catch (err) {
            setError("Failed to add user.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setRole("");
        setError("");
    };

    const handleDeleteDialogOpen = (userId: string) => {
        setSelectedUserId(userId);
        setOpenDeleteDialog(true);
    };

    const handleDeleteUser = async () => {
        if (selectedUserId) {
            try {
                await deleteUser(selectedUserId);
                fetchUsers();
                setOpenDeleteDialog(false);
            } catch (err) {
                setError("Failed to delete user.");
            }
        }
    };

    const handleDeleteDialogClose = () => {
        setOpenDeleteDialog(false);
        setSelectedUserId(null);
    };

    const getRoleChip = (role: any) => {
        const roleColors = {
            ADMIN: "error",
            STUDENT: "primary",
            TEACHER: "success",
            PARENT: "warning",
        };

        return (
            <Chip
                label={role}
                color={roleColors[role] || "default"}
                size="small"
            />
        );
    };

    return (
        <>
            <div style={{display: "flex", marginBottom: 16}}>
                <Typography variant="h5" style={{marginBottom: 16}}>
                    Manage Users
                </Typography>
                <Button
                    style={{marginLeft: "auto"}}
                    variant="contained"
                    color="primary"
                    onClick={() => setOpenDialog(true)}
                >
                    Add New User
                </Button>
            </div>

            {/* Add User Dialog */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Add New User</DialogTitle>
                <DialogContent>
                    {error && <Typography color="error">{error}</Typography>}
                    <TextField
                        fullWidth
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        label="Phone"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={isLoading}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    <Select
                        fullWidth
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        displayEmpty
                        style={{marginTop: 16}}
                    >
                        <MenuItem value="" disabled>
                            Select Role
                        </MenuItem>
                        <MenuItem value="ADMIN">Admin</MenuItem>
                        <MenuItem value="TEACHER">Teacher</MenuItem>
                        <MenuItem value="STUDENT">Student</MenuItem>
                        <MenuItem value="PARENT">Parent</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary" disabled={isLoading}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleAddUser}
                        color="primary"
                        variant="contained"
                        disabled={isLoading}
                    >
                        {isLoading ? <CircularProgress size={24} color="inherit"/> : "Add User"}
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={openDeleteDialog} onClose={handleDeleteDialogClose}>
                <DialogTitle>Delete User</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to delete this user?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteDialogClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDeleteUser}
                        color="secondary"
                        variant="contained"
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

            {loading ? (
                <Typography>Loading users...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <TableContainer component={Paper} elevation={2}>
                    <Table sx={{minWidth: '100%'}} aria-label="user table">
                        <TableHead>
                            <TableRow sx={{backgroundColor: "#f5f5f5"}}>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Verified</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{getRoleChip(user.role)}</TableCell>
                                        <TableCell>{user.isVerified ? "Yes" : "No"}</TableCell>
                                        <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                sx={{
                                                    color: 'red',
                                                    '&:hover': {backgroundColor: 'red', color: 'white'}
                                                }}
                                                onClick={() => handleDeleteDialogOpen(user._id)}
                                            >
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            )}
        </>
    );
}
