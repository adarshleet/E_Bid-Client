import { toast } from 'sonner';
const errorHandle = (error) => {
    const axiosError = error;
    if (axiosError.response?.data) {
        const errorResponse = axiosError.response.data
        if (errorResponse.error) {
            toast.error(errorResponse.error);
        } else {
            console.log('Error response has no message');
        }
    } else {
        toast.error('An error occurred. Please try again!');
        console.log(axiosError.message);
    }
};


export default errorHandle