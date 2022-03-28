"use strict";
exports.id = 2754;
exports.ids = [2754];
exports.modules = {

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "he": () => (/* binding */ AuthConsumer),
  "Vo": () => (/* binding */ AuthContext),
  "Ho": () => (/* binding */ AuthProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
;// CONCATENATED MODULE: ./services/auth.service.ts


class AuthService {
    async login(request) {
        try {
            const { data  } = await external_axios_default().post("/api/auth/login", request);
            return data;
        } catch (error) {
            var ref, ref1;
            external_react_hot_toast_default().error((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.error) || "Error");
            return error.response.data;
        }
    }
    async register(request) {
        try {
            const { data  } = await external_axios_default().post("/api/auth/register", request);
            return data;
        } catch (error) {
            var ref, ref2;
            external_react_hot_toast_default().error((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : (ref2 = ref.data) === null || ref2 === void 0 ? void 0 : ref2.error) || "Error");
            return error.response.data;
        }
    }
    async me(accessToken) {
        try {
            const { data  } = await external_axios_default().get("/api/user", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return data;
        } catch (error) {
            var ref, ref3;
            external_react_hot_toast_default().error((error === null || error === void 0 ? void 0 : (ref = error.response) === null || ref === void 0 ? void 0 : (ref3 = ref.data) === null || ref3 === void 0 ? void 0 : ref3.error) || "Error");
            return error.response.data;
        }
    }
}
const auth = new AuthService();

;// CONCATENATED MODULE: ./contexts/auth.tsx



var ActionType;
(function(ActionType) {
    ActionType["INITIALIZE"] = "INITIALIZE";
    ActionType["LOGIN"] = "LOGIN";
    ActionType["LOGOUT"] = "LOGOUT";
    ActionType["REGISTER"] = "REGISTER";
})(ActionType || (ActionType = {}));
const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};
const handlers = {
    INITIALIZE: (state, action)=>{
        const { isAuthenticated , user  } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    LOGIN: (state, action)=>{
        const { user  } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    LOGOUT: (state)=>({
            ...state,
            isAuthenticated: false,
            user: null
        })
    ,
    REGISTER: (state)=>{
        return state;
    }
};
const reducer = (state, action)=>handlers[action.type] ? handlers[action.type](state, action) : state
;
const AuthContext = /*#__PURE__*/ (0,external_react_.createContext)({
    ...initialState,
    platform: "JWT",
    // @ts-ignore
    login: ()=>Promise.resolve()
    ,
    logout: ()=>Promise.resolve()
    ,
    register: ()=>Promise.resolve()
});
const AuthProvider = (props)=>{
    const { children  } = props;
    const { 0: state , 1: dispatch  } = (0,external_react_.useReducer)(reducer, initialState);
    (0,external_react_.useEffect)(()=>{
        const initialize = async ()=>{
            try {
                const accessToken = globalThis.localStorage.getItem("accessToken");
                if (accessToken) {
                    const { user  } = await auth.me(accessToken);
                    dispatch({
                        type: ActionType.INITIALIZE,
                        payload: {
                            isAuthenticated: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: ActionType.INITIALIZE,
                        payload: {
                            isAuthenticated: false,
                            user: null
                        }
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: ActionType.INITIALIZE,
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        };
        initialize();
    }, []);
    const login = async (request)=>{
        const loginResponse = await auth.login(request);
        localStorage.setItem("accessToken", loginResponse.token);
        dispatch({
            type: ActionType.LOGIN,
            payload: loginResponse
        });
        return loginResponse;
    };
    const logout = async ()=>{
        localStorage.removeItem("accessToken");
        dispatch({
            type: ActionType.LOGOUT
        });
    };
    const register = async (request)=>{
        const registerResponse = await auth.register(request);
        dispatch({
            type: ActionType.REGISTER,
            payload: registerResponse
        });
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(AuthContext.Provider, {
        value: {
            ...state,
            platform: "JWT",
            login,
            logout,
            register
        },
        children: children
    }));
};
const AuthConsumer = AuthContext.Consumer;


/***/ })

};
;