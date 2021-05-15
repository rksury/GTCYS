const formData = [

    {
        name: "startDate",
        type: "date"
    },
    {
        name: "endDate",
        type: "date"
    },

    {
        name: "procedureCode",
        type: "text"
    },
    {
        name: "qty",
        type: "text"
    },
    {
        name: "placeService",
        type: "text"
    },
    {
        name: "diag1",
        type: "text"
    },
    {
        name: "diag2",
        type: "text"
    },
    {
        name: "diag3",
        type: "text"
    },
    {
        name: "diag4",
        type: "text"
    },
    {
        name: "modifier1",
        type: "text"
    },
    {
        name: "modifier2",
        type: "text"
    },
    {
        name: "modifier3",
        type: "text"
    },
    {
        name: "modifier4",
        type: "text"
    },
    {
        name: "ndcCode",
        type: "text"
    },
    {
        name: "ndcQty",
        type: "text"
    },
    {
        name: "billedAmount",
        type: "text"
    },
    {
        name: "email",
        type: "email"
    },
    {
        name: "number",
        type: "text"
    },

]

const validation = (error, setError, data) => {

    if (!data.startDate) {
        setError("Select start of service !!")
        return false
    }


    if (!data.endDate) {
        setError("Select end of service !!")
        return false
    }


    if (!data.procedureCode) {
        setError("Enter procedure code !!")
        return false
    }


    if (!data.qty) {
        setError("Enter Quantity !!")
        return false
    }


    if (!data.placeService) {
        setError(" Enter place of service !!")
        return false
    }


    if (!data.diag1) {
        setError("Enter Diagnosis Pointers at least one !!")
        return false
    }


    if (!data.modifier1) {
        setError("Enter modifier at least one !!")
        return false
    }


    if (!data.ndcCode) {
        setError("Enter NDC Code !!")
        return false
    }


    if (!data.ndcQty) {
        setError("Enter NDC Quantity !!")
        return false
    }


    if (!data.billedAmount) {
        setError("Enter Billed Amount !!")
        return false
    }


    if (!data.email) {
        setError("Enter email address !!")
        return false
    } else {
        const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailFormat.test(String(data.email).toLowerCase())) {
            setError("")
        } else {
            setError("Incorrect email address !!")
            return false
        }
    }


    if (!data.number) {
        setError("Enter contact number !!")
        return false
    }


    if (!error) {
        return true
    }




}


export {validation, formData}


