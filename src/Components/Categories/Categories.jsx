import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data";

export default function Categories() {
	const { name } = useParams();
	let category = data
		?.filter((i) => i.category === name)
		.map((i) => (
			<div className="col-lg-3 col-md-4 col-sm-6">
				<div className="text-center">
						<div className="product-card">
							<div className="product-card-image-layout">
								<img src="/assets/Product.png" alt="img" />
							</div>
							<div className="description">
								<h6>{i.name}</h6>
								<div className="d-flex">
									<span className="fw-semibold me-1">Category: </span>
									<div className="category">{i.category}</div>
								</div>
								<div>
									<span className="fw-semibold">Sizes: </span> {i.sizes}
								</div>
							</div>
					</div>
				</div>
			</div>
		));
	console.log(category);
	return (
		<div className="my-4">
			<div className="container">
				<div className="row gy-3">{category}</div>
			</div>
		</div>
	);
}
