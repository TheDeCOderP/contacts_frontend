(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{3906:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contacts/AddContacts",function(){return n(2489)}])},2489:function(e,t,n){"use strict";n.r(t);var s=n(5893),a=n(7294),l=n(2641),c=n(5005),o=n(6154),r=n(1664),i=n.n(r);t.default=function(){let[e,t]=(0,a.useState)({name:"",email:"",mobile:""}),[n,r]=(0,a.useState)(!1),d=n=>{t({...e,[n.target.name]:n.target.value})};return n?(0,s.jsxs)("div",{className:"container success_message d-flex flex-column align-items-center justify-center",children:[(0,s.jsx)("h3",{children:"Contact Added Successfully!"}),(0,s.jsx)(i(),{href:"/contacts",className:"add_contact_button m-1 mt-3 text-light btn btn-dark ",children:"See Contacts List"})]}):(0,s.jsxs)("div",{className:"container user_add_form",children:[(0,s.jsx)("h2",{children:"Add New Contact"}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-sm-12 col-lg-12 col-md-12",children:(0,s.jsxs)(l.Z,{onSubmit:t=>{t.preventDefault(),o.Z.post("http://localhost:5000/users",e).then(e=>{console.log(e.data),r(!0)}).catch(e=>{console.error(e)})},children:[(0,s.jsx)(l.Z.Group,{controlId:"name",className:"form-fields",children:(0,s.jsx)(l.Z.Control,{type:"text",name:"name",placeholder:"Name",value:e.name,onChange:d,required:!0})}),(0,s.jsx)(l.Z.Group,{controlId:"email",className:"form-fields",children:(0,s.jsx)(l.Z.Control,{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:d,required:!0})}),(0,s.jsx)(l.Z.Group,{controlId:"phone",className:"form-fields",children:(0,s.jsx)(l.Z.Control,{type:"tel",name:"mobile",placeholder:"Mobile No.",value:e.mobile,onChange:d,required:!0})}),(0,s.jsx)("center",{children:(0,s.jsx)(c.Z,{variant:"success",className:"mt-3 user_form_submit_button",type:"submit",children:"Add Contact Now"})})]})})})]})}}},function(e){e.O(0,[983,774,888,179],function(){return e(e.s=3906)}),_N_E=e.O()}]);