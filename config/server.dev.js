// config used by server side only
const dbHost = process.env.DB_HOST || 'ds060977.mlab.com';
const dbPort = process.env.DB_PORT || 60977;
const dbName = process.env.DB_NAME || 'jcellphonestore';
const dbUser = process.env.DB_USER || 'juabsa';
const dbPass = process.env.DB_PASS || 'Alianza9210';
const dbCred =
	dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';

const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}`;

module.exports = {
	// used by Store (server side)
	apiBaseUrl: `/api/v1`,

	// used by Store (server and client side)
	ajaxBaseUrl: `/ajax`,

	// Access-Control-Allow-Origin
	//storeBaseUrl: `http://jcellphone.com`,
	storeBaseUrl: 'https://jcellphone.azurewebsites.net', 

	// used by API
	adminLoginUrl: '/admin/login',

	apiListenPort: 8081,
	storeListenPort: 8080,

	// used by API
	mongodbServerUrl: dbUrl,

	smtpServer: {
		host: '',
		port: 0,
		secure: true,
		user: '',
		pass: '',
		fromName: '',
		fromAddress: ''
	},

	// key to sign tokens
	jwtSecretKey: '-',

	// key to sign store cookies
	cookieSecretKey: '-',

	// path to uploads
	categoriesUploadPath: 'public/content/images/categories',
	productsUploadPath: 'public/content/images/products',
	filesUploadPath: 'public/content',
	themeAssetsUploadPath: 'theme/assets/images',

	// url to uploads
	categoriesUploadUrl: '/images/categories',
	productsUploadUrl: '/images/products',
	filesUploadUrl: '',
	themeAssetsUploadUrl: '/assets/images',

	// store UI language
	language: 'en',

	// used by API
	orderStartNumber: 1000,

	developerMode: true
};
