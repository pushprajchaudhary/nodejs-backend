import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // Current user subscriber
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // Whom i am subscribing 
        ref: "User"
    }
})

export const Subscription = mongoose.model('subscription', subscriptionSchema)