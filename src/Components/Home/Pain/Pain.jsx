import React from "react";

export default function Pain() {
	return (
		<div className="pain">
			<div className="container">
				<div className="row">
					<div className="my-auto content col-lg-6">
						<h3>Do You Feel Pain</h3>
						<div>Miracle is your best choice</div>
						<div>What are you waiting for? Get your first item now.</div>
					</div>
					<div className="col-lg-6 position-relative">
						<div className="image-container">
							<img
								src="/assets/Skeleton.jpg"
								alt="skeleton"
								className="img-fluid"
							/>
							<div className="circle " style={{ top: "25%", left: "39%" }}>
								<div className="part">elbow</div>
							</div>
							<div className="circle" style={{ top: "23%", left: "49%" }}>
								<div className="part">shoulder</div>
							</div>
							<div className="circle" style={{ top: "23%", left: "53%" }}>
								<div className="part">neck</div>
							</div>
							<div className="circle" style={{ top: "48%", left: "60%" }}>
								<div className="part">wrist</div>
							</div>
							<div className="circle" style={{ top: "45%", left: "32%" }}>
								<div className="part">fingers</div>
							</div>
							<div className="circle" style={{ top: "40%", left: "40%" }}>
								<div className="part">back</div>
							</div>
							<div className="circle" style={{ top: "45%", left: "45%" }}>
								<div className="part">abdominal</div>
							</div>
							<div className="circle" style={{ top: "35%", left: "50%" }}>
								<div className="part">chest</div>
							</div>
							<div className="circle" style={{ top: "70%", left: "25%" }}>
								<div className="part">calf</div>
							</div>
							<div className="circle" style={{ top: "65%", left: "35%" }}>
								<div className="part">thigh</div>
							</div>
							<div className="circle" style={{ top: "65%", left: "53%" }}>
								<div className="part">knee</div>
							</div>
							<div className="circle" style={{ top: "80%", left: "50%" }}>
								<div className="part">ankle & foot</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
