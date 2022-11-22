import {
	MeshLambertMaterial,
	MeshBasicMaterial,
	DoubleSide,
	MeshPhongMaterial,
	AlwaysStencilFunc,
	BackSide,
	IncrementWrapStencilOp,
	FrontSide,
	DecrementWrapStencilOp,
	MeshNormalMaterial,
	NotEqualStencilFunc,
	ReplaceStencilOp,
} from "three";
export const ViewMaterial = {
	createMaterial: (transparent, opacity, color) => {
		return new MeshLambertMaterial({
			transparent: transparent,
			opacity: opacity,
			color: color,
			side: DoubleSide,
			depthWrite: true,
			depthTest: true,
			// vertexColors: true,
		});
	},

	changeMaterial: (option, material) => {
		if (option.transparent) material.transparent = option.transparent;
		if (option.opacity) material.opacity = option.opacity;
		if (option.color) material.color = option.color;
	},
	backFaceStencilMat: new MeshLambertMaterial({
		color: "black",
		depthWrite: false,
		depthTest: false,
		colorWrite: true,
		stencilWrite: true,
		stencilFunc: AlwaysStencilFunc,
		side: BackSide,
		stencilFail: IncrementWrapStencilOp,
		stencilZFail: IncrementWrapStencilOp,
		stencilZPass: IncrementWrapStencilOp,
	}),
	frontFaceStencilMat: new MeshLambertMaterial({
		color: "black",
		depthWrite: false,
		depthTest: false,
		colorWrite: true,
		stencilWrite: true,
		stencilFunc: AlwaysStencilFunc,
		side: FrontSide,
		stencilFail: DecrementWrapStencilOp,
		stencilZFail: DecrementWrapStencilOp,
		stencilZPass: DecrementWrapStencilOp,
	}),
	planeStencilMat: new MeshLambertMaterial({
		color: "black",
		stencilWrite: true,
		stencilRef: 0,
		stencilFunc: NotEqualStencilFunc,
		stencilFail: ReplaceStencilOp,
		stencilZFail: ReplaceStencilOp,
		stencilZPass: ReplaceStencilOp,
	}),
};
