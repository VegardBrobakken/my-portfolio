const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "my-portfolio/_app",
	assets: new Set([".DS_Store","favicon.ico","favicon.png","images/.DS_Store","images/projects/.DS_Store","images/projects/android.jpg","images/projects/artvista.jpg","images/projects/ds-exam.jpg","images/projects/github.png","images/projects/im.jpg","images/projects/kws2100.jpg","images/projects/linkedin.png","images/projects/newsapp.jpg","images/projects/pro105.jpg","images/projects/snertbygg.jpg","images/projects/v3logo.jpg","images/projects/v3logo.png","images/vegard.jpeg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.CHTkMzmk.js","app":"_app/immutable/entry/app.Bg-BXndJ.js","imports":["_app/immutable/entry/start.CHTkMzmk.js","_app/immutable/chunks/entry.BdfLo-2J.js","_app/immutable/chunks/runtime.DH9pO5VC.js","_app/immutable/entry/app.Bg-BXndJ.js","_app/immutable/chunks/runtime.DH9pO5VC.js","_app/immutable/chunks/render.4F26tfU1.js","_app/immutable/chunks/disclose-version._hBSoWnm.js","_app/immutable/chunks/if.BfAC6568.js","_app/immutable/chunks/proxy.DgGozJAb.js","_app/immutable/chunks/store.PHkqnM3Q.js","_app/immutable/chunks/index-client.DBpHOyxL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-pnM5w217.js')),
			__memo(() => import('./chunks/1-CPifq40K.js')),
			__memo(() => import('./chunks/2-CG41YoyI.js')),
			__memo(() => import('./chunks/3-DpPU72OP.js')),
			__memo(() => import('./chunks/4-CtEH_PHu.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "/my-portfolio";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
