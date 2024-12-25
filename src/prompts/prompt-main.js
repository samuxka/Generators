const mainPrompt = [
    {
        name: "select",
        description: "Choose tool (1 - QRCODE ou 2 - PASSWORD)",
        pattern: /^[1-2]+$/,
        message: "Choose only 1 or 2",
        required: true
    },
]

export default mainPrompt