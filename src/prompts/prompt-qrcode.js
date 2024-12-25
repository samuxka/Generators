const promptQRcode = [
    {
        name: "link",
        description: "Write the link to generate the QR code",
    },
    {
        name: "type",
        description: "Choose QRCode type (1 - NORMAL or 2 - TERMINAL)",
        pattern: /^[1-2]+$/,
        message: "Choose only 1 or 2",
        required: true,
    }
]

export default promptQRcode