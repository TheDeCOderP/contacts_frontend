"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 9518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EditContacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5088);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);






const UserData = ()=>{
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [editingUserId, setEditingUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [searchQuery1, setSearchQuery1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [searchQuery2, setSearchQuery2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        try {
            const response = await fetch("http://localhost:5000/users");
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    const handleDelete = async (userId)=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            try {
                const response = await fetch(`http://localhost:5000/users/${userId}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                    console.log("User deleted successfully");
                    fetchData(); // Fetch updated data after deletion
                } else {
                    console.error("Error deleting user:", response.status);
                }
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        }
    };
    const handleUpdate = async (updatedUser)=>{
        try {
            const response = await fetch(`http://localhost:5000/users/${updatedUser.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            });
            if (response.ok) {
                console.log("User updated successfully");
                fetchData(); // Fetch updated data after update
                setEditingUserId(null); // Reset the editing user ID
            } else {
                console.error("Error updating user:", response.status);
            }
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };
    const handleEdit = (userId)=>{
        setEditingUserId(userId);
    };
    const handleCancelEdit = ()=>{
        setEditingUserId(null);
    };
    const handleResetSearch = ()=>{
        setSearchQuery("");
        setSearchQuery1("");
        setSearchQuery2("");
    };
    const filteredData = data.filter((item)=>item.name.toLowerCase().includes(searchQuery.toLowerCase()) && item.email.toLowerCase().includes(searchQuery1.toLowerCase()) && item.mobile.toLowerCase().includes(searchQuery2.toLowerCase()));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container product_grid",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row contact_search_form",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-12 col-md-3 col-lg-3 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Search By Name",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "form-control"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-12 col-md-3 col-lg-3 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "email",
                            placeholder: "Search By Email",
                            value: searchQuery1,
                            onChange: (e)=>setSearchQuery1(e.target.value),
                            className: "form-control"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-12 col-md-3 col-lg-3 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "number",
                            placeholder: "Search By Phone",
                            value: searchQuery2,
                            onChange: (e)=>setSearchQuery2(e.target.value),
                            className: "form-control"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-12 col-md-3 col-lg-3 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
                            variant: "dark",
                            onClick: handleResetSearch,
                            className: "pt-2 pb-2",
                            children: "View All Contacts"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: filteredData.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-12 col-md-6 col-lg-6 products_grid",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "products_card",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                                children: editingUserId === item.id ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_EditContacts__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    user: item,
                                    updateUser: handleUpdate,
                                    onCancelEdit: handleCancelEdit
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Title), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Name : "
                                                }),
                                                item.name
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Mobile No : "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `tel:${item.mobile}`,
                                                    children: item.mobile
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Email : "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `mailto:${item.email}`,
                                                    children: item.email
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "edit_delete",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>handleEdit(item.id),
                                                    children: "Edit"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>handleDelete(item.id),
                                                    children: "Delete"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, item.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserData);


/***/ })

};
;