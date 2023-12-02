import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [buttonColor, setButtonColor] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		setButtonColor(email && password ? "#2449EE" : "#B0B0B0");
	}, [email, password]);

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleLoginClick();
		}
	};
	localStorage.removeItem("token");

	const handleLoginClick = async () => {
		try {
			const response = await axios.post("http://192.168.1.7:8000/api/login", {
				email,
				password,
			});
			
			const responseData = response.data;
			localStorage.setItem("token", responseData.authorization.token);


			// if (responseData.authorization && responseData.authorization.token) {
			// 	await axios.get("http://192.168.43.147:8000/api/users", {
			// 		token: responseData.authorization.token,
			// 	});
			// 	// localStorage.setItem("_isKelompok", responseData.user.kelompok);

			// 	// if (responseData.user.role === "0") {
			// 	// 	navigate("/admin");
			// 	// } else {
				// 	// }
				
				
				
				// }
					navigate("/user");
				alert("Login berhasil!");

		} catch (error) {
			console.error("Login Failed!", error);
		}
	};

	return (
		<section className="gradient-form h-screen flex justify-center items-center bg-neutral-200 dark:bg-neutral-700">
			<div className="absolute container h-full p-10">
				<div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
					<div className="w-[1000px]">
						<div className="block rounded-lg bg-neutral-800 text-white shadow-lg dark:bg-neutral-800">
							<div className="g-0 flex justify-center lg:flex lg:flex-wrap">
								{/* Left column container*/}
								<div className="px-4 md:px-0 lg:w-6/12">
									<div className="md:mx-6 md:p-12">
										{/* Logo */}
										<div className="text-center">
											<h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
												KELOMPOK 2
											</h4>
										</div>

										<form>
											<p className="mb-4">Please login to your account</p>
											{/* Username input */}
											<div className="relative mb-4" data-te-input-wrapper-init>
												<input
													type="text"
													className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 focus:border-blue-500 focus:ring focus:ring-blue-500"
													id="exampleFormControlInput1"
													placeholder="Email"
													value={email}
													onChange={(e) => setEmail(e.target.value)}
													onKeyPress={handleKeyPress}
												/>
											</div>

											{/* Password input */}
											<div className="relative mb-4" data-te-input-wrapper-init>
												<input
													type="password"
													className="peer block min-h-[auto] w-full rounded border border-inherit bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200  focus:border-blue-500 focus:ring focus:ring-blue-500"
													id="exampleFormControlInput11"
													placeholder="Password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													onKeyPress={handleKeyPress}
												/>
											</div>

											{/* Submit button */}
											<div className="mb-12 pb-1 pt-1 text-center">
												<Link to={handleLoginClick}>
													<button
														onClick={handleLoginClick}
														className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
														type="button"
														data-te-ripple-init
														data-te-ripple-color="light"
														style={{
															background: buttonColor,
														}}>
														Log in
													</button>
												</Link>
												<div className="mt-2">
												<p>Apakah kamu tidak punya akun?</p>
												<Link
													className="text-blue-500 underline"
													to={"registrasi"}>
													Registrasi
												</Link>
														</div>
											</div>
											<div></div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
