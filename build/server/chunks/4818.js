"use strict";
exports.id = 4818;
exports.ids = [4818];
exports.modules = {

/***/ 4818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



const DirectorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    storeName: {
        type: String,
        trim: true,
        required: [
            true,
            "Please provide a business/store name"
        ],
        maxlength: [
            64,
            "Store name is too long"
        ],
        minlength: [
            3,
            "Store name is too short"
        ]
    },
    user: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().SchemaTypes.ObjectId),
        ref: "User",
        default: null,
        select: false
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please provide a valid email", 
        ]
    },
    address: {
        type: String,
        required: [
            true,
            "Please provide an address"
        ],
        trim: true,
        minlength: [
            8,
            "Address is too short"
        ],
        maxlength: [
            256,
            "Address is too long"
        ]
    },
    category: {
        type: [
            {
                type: String,
                ref: "Category"
            }
        ],
        minlength: [
            1,
            "Please provide atleast one category"
        ]
    },
    state: {
        type: String,
        required: [
            true,
            "Please provide a state"
        ],
        minlength: [
            2,
            "State name is too short"
        ],
        maxlength: [
            16,
            "State name is too long"
        ]
    },
    pincode: {
        type: String,
        required: [
            true,
            "Please provide a pincode"
        ],
        match: [
            /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/g,
            "Please provide a valid pincode"
        ]
    },
    number: {
        type: String,
        required: [
            true,
            "Please provide a phone number"
        ],
        match: [
            /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/g,
            "Please provide a valid phone number", 
        ]
    },
    products: {
        type: [
            {
                type: String,
                trim: true
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 25
            ,
            "Too many products"
        ]
    },
    services: {
        type: [
            {
                type: String,
                trim: true
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 25
            ,
            "Too many services"
        ]
    },
    location: {
        type: {
            lat: Number,
            lng: Number
        },
        default: {
            lat: 28.7041,
            lng: 77.1025
        }
    },
    timings: {
        type: [
            {
                _id: false,
                from: String,
                to: String
            }, 
        ],
        default: Array(7).fill({
            from: "00:00",
            to: "00:00"
        }),
        validate: [
            (arr)=>arr.length <= 7
            ,
            "You can have at most 7 timings"
        ]
    },
    faq: {
        type: [
            {
                _id: false,
                question: {
                    type: String,
                    required: true,
                    trim: true,
                    minlength: [
                        4,
                        "Question is too short"
                    ],
                    maxlength: [
                        120,
                        "Question is too long"
                    ]
                },
                answer: {
                    type: String,
                    required: true,
                    trim: true,
                    minlength: [
                        4,
                        "Answer is too short"
                    ],
                    maxlength: [
                        1024,
                        "Answer is too long"
                    ]
                }
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 10
            ,
            "Too many FAQs"
        ]
    },
    gallery: {
        type: [
            String
        ],
        default: []
    },
    features: {
        type: [
            {
                type: String,
                trim: true,
                minlength: [
                    4,
                    "Feature length is too short"
                ],
                maxlength: [
                    16,
                    "Feature length is too long"
                ]
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 10
            ,
            "Too many features"
        ]
    },
    details: {
        type: [
            {
                title: {
                    type: String,
                    trim: true,
                    minlength: [
                        4,
                        "Details title is too short"
                    ],
                    maxlength: [
                        12,
                        "Details title is too long"
                    ]
                },
                content: {
                    type: String,
                    trim: true,
                    minlength: [
                        4,
                        "Details content is too short"
                    ],
                    maxlength: [
                        64,
                        "Details content is too long"
                    ]
                },
                _id: false
            }, 
        ],
        default: [],
        validate: [
            (arr)=>arr.length <= 10
            ,
            "Too many details"
        ]
    },
    directoryImages: {
        type: [
            String
        ],
        set: function(directoryImages) {
            // @ts-ignore
            this._previousDirectoryImages = this.directoryImages;
            return directoryImages;
        },
        default: []
    },
    website: {
        type: String,
        lowercase: true,
        default: "",
        trim: true,
        match: [
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
            "Please provide a valid website", 
        ]
    },
    tagline: {
        type: String,
        trim: true,
        maxlength: [
            32,
            "Tagline is too long"
        ],
        default: ""
    },
    description: {
        type: String,
        maxlength: [
            4096,
            "Description is too long"
        ],
        default: ""
    },
    username: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    approvedAt: {
        type: Date
    }
}, {
    timestamps: true,
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
});
DirectorySchema.pre("save", async function(next) {
    // Handling username
    if (!this.username) this.username = this._id.toString();
    // Deleting preious directory images
    if (this.isModified("directoryImages")) {
        // @ts-ignore
        const previous = this._previousDirectoryImages;
        // Checking for deleted images
        if (previous && previous.length > this.directoryImages.length) {
            const deletedImages = previous.filter((x)=>!this.directoryImages.includes(x)
            );
            for (const image of deletedImages){
                const previousPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(__dirname, "..", "client", "public", image);
                if (fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(previousPath)) {
                    fs__WEBPACK_IMPORTED_MODULE_1___default().unlink(previousPath, (err)=>err && console.error(err)
                    );
                }
            }
        }
    }
    // Set approval to false every time the document is updated
    if (!this.isModified("isApproved")) this.isApproved = false;
    next();
});
// Virtual field for reviews and ratings
DirectorySchema.virtual("reviews", {
    ref: "Review",
    localField: "_id",
    foreignField: "revieweeId"
});
DirectorySchema.virtual("rating").get(function() {
    // @ts-ignore
    this.populate("reviews");
    let rating = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };
    // @ts-ignore
    if (!this.reviews) return rating;
    // @ts-ignore
    this.reviews.forEach((review)=>rating[review.rating]++
    );
    return rating;
});
DirectorySchema.virtual("averageRating").get(function() {
    // @ts-ignore
    this.populate("reviews");
    // @ts-ignore
    if (!this.reviews || this.reviews.length === 0) return 0;
    let total = 0;
    // @ts-ignore
    for(const num in this.rating)total += num * this.rating[num];
    // @ts-ignore
    return (total / this.reviews.length).toFixed(1);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Directory) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Directory", DirectorySchema));


/***/ })

};
;