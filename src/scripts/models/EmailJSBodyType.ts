type EmailJSBodyType = {
    service_id: string,
    template_id: string,
    user_id: string,
    template_params: {
        name: string,
        email: string,
        message: string,
    },
}

export default EmailJSBodyType;