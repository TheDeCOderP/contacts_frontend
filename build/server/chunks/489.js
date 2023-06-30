"use strict";
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 2489:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_3__]);
axios__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function AddUsers() {
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        email: "",
        mobile: ""
    });
    const [formSubmitted, setFormSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Make a POST request to your backend endpoint for saving the data to the database
        axios__WEBPACK_IMPORTED_MODULE_3__["default"].post("http://localhost:5000/users", formData).then((response)=>{
            console.log(response.data); // Handle success or display a success message
            setFormSubmitted(true);
        }).catch((error)=>{
            console.error(error); // Handle error or display an error message
        });
    // Send an email to the admin using your preferred email sending method/library
    // Example: axios.post('/api/send-email', formData)
    };
    if (formSubmitted) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container success_message d-flex flex-column align-items-center justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Contact Added Successfully!"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/contacts",
                    className: "add_contact_button m-1 mt-3 text-light btn btn-dark ",
                    children: "See Contacts List"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container user_add_form",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Add New Contact"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-sm-12 col-lg-12 col-md-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form, {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                controlId: "name",
                                className: "form-fields",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Name",
                                    value: formData.name,
                                    onChange: handleChange,
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                controlId: "email",
                                className: "form-fields",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Email",
                                    value: formData.email,
                                    onChange: handleChange,
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Group, {
                                controlId: "phone",
                                className: "form-fields",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Form.Control, {
                                    type: "tel",
                                    name: "mobile",
                                    placeholder: "Mobile No.",
                                    value: formData.mobile,
                                    onChange: handleChange,
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    variant: "success",
                                    className: "mt-3 user_form_submit_button",
                                    type: "submit",
                                    children: "Add Contact Now"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;