// import React, { Component } from "react";
// import { StaticImage } from "gatsby-plugin-image";
//
// export default class Resume extends Component {
// 	render() {
// 		return (
// 			<article
// 				id="resume"
// 				className={`${this.props.article === "resume" ? "active" : ""} ${
// 					this.props.articleTimeout ? "timeout" : ""
// 				}`}
// 				style={{ display: "none" }}
// 			>
// 				<h2 className="major">Resume</h2>
// 				<div
// 					style={{
// 						display: "grid",
// 						gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
// 					}}
// 				>
// 					<div
// 						style={{ textAlign: "center", cursor: "pointer", marginBottom: 30 }}
// 						onClick={() => {
// 							window.open(
// 								"https://drive.google.com/file/d/1gNYcPSCecQPctiGZNWKWnauFKcbx9khI/view?usp=drive_link",
// 							);
// 						}}
// 					>
// 						<StaticImage
// 							src={"../images/graphicalResume.png"}
// 							style={{ width: "90%" }}
// 							alt={"graphical resume"}
// 							placeholder="blurred"
// 							width={336}
// 							height={434}
// 						/>
// 						<button style={{ marginTop: 10 }}>Graphical (PDF)</button>
// 					</div>
// 					<div
// 						style={{ textAlign: "center", cursor: "pointer", marginBottom: 30 }}
// 						onClick={() => {
// 							window.open("https://resume.creddle.io/resume/gkf096723g5");
// 						}}
// 					>
// 						<StaticImage
// 							src={"../images/textualResume.png"}
// 							style={{ width: "90%" }}
// 							alt={"text based resume"}
// 							placeholder="blurred"
// 							width={336}
// 							height={434}
// 						/>
// 						<button style={{ marginTop: 10 }}>Textual (Web)</button>
// 					</div>
// 				</div>
// 				{this.props.close}
// 			</article>
// 		);
// 	}
// }
