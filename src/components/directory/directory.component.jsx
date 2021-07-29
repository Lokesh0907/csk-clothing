import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					id: 1,
					title: "HATS",
					imageUrl:
						"https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
				},
				{
					id: 2,
					title: "HATS",
					imageUrl:
						"https://images.unsplash.com/photo-1604644401890-0bd678c83788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
				},
				{
					id: 3,
					title: "HATS",
					imageUrl:
						"https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
				},
				{
					id: 4,
					title: "WOMENS",
					imageUrl:
						"https://images.unsplash.com/photo-1599809836744-99fdf7afd880?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
					size: "large",
				},
				{
					id: 5,
					title: "MENS",
					imageUrl:
						"https://images.unsplash.com/photo-1619217315013-2de012942562?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
					size: "large",
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, title, imageUrl, size }) => {
					return (
						<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
					);
				})}
			</div>
		);
	}
}

export default Directory;
