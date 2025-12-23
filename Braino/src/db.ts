import {model, Schema} from "mongoose";

// User
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, 
{ timestamps: true });

// Tag
const tagSchema = new Schema({
    title: {type: String, required: true, unique: true}
}, 
{ timestamps: true });

// Content
const contentTypes = ["audio", "video", "image", "article"] as const;
const contentSchema = new Schema({
    title: {type: String, required: true}, 
    type: {type: String, enum: contentTypes, required: true },
    link: {type: String, required: true},
    tags: [{type: Schema.Types.ObjectId, ref: "Tags"}],
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
}, 
{ timestamps: true });

// Link
const linkSchema = new Schema({
    hash: {type: String},
    userId: {type: Schema.Types.ObjectId, ref: "User"}
});

// Models
const UserModel = model("User", userSchema);
const ContentModel = model("Content", contentSchema);
const TagsModel = model("Tags", tagSchema);
const LinkModel = model("Link", linkSchema);

export {
    UserModel,
    ContentModel,
    TagsModel,
    LinkModel
};