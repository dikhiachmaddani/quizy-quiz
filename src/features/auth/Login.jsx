import Layout from "../../components/layout/Layout"
import { useForm } from "react-hook-form"
import PropTypes from 'prop-types';

export default function Login({ onLogin }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        onLogin(data);
    }

    return (
        <Layout>
            <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mb-10 text-neutral-primary">
                    <h1 className="text-6xl mb-4">Quizy Quiz!</h1>
                    <h2 className="text-md">Are you ready to play Quizy Quiz? challenge yourself <br className="" /> to complete this quiz. Please log in first to get started!</h2>
                </div>
                <div className=" flex flex-col gap-8">
                    <div>
                        <input defaultValue="" {...register("email", { required: true })} type="email" placeholder="Email" className="bg-neutral-primary rounded-full w-full px-7 py-4 placeholder:black-primary" />
                        {errors.email && <p className="text-red-400 mt-3 text-center">The email field is required!</p>}
                    </div>
                    <div>
                        <input defaultValue="" {...register("password", { required: true, minLength: 8 })} type="password" placeholder="Password" className="bg-neutral-primary rounded-full w-full px-7 py-4 placeholder:black-primary" />
                        {errors.password && (
                            <p className="text-red-400 mt-3 text-center">
                                {errors.password.type === "required"
                                    ? "The password field is required!"
                                    : errors.password.type === "minLength"
                                        ? "The password field must be at least 8 characters long!"
                                        : ""}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button type="submit" className="bg-primary w-40 h-14 rounded-full text-lg text-neutral-primary">Login!</button>
                </div>
            </form>
        </Layout>
    )
}

Login.propTypes = {
    onLogin: PropTypes.func
}