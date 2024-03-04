import mongoose, { Schema } from "mongoose";

const above20kSchema = new Schema(
{
MobileName:String,
imgUrl:String,
VariantAndPrices:[String],
featuresUrl:String

},
{
timestamps: true,
}
);

const above20k = mongoose.models.above20k || mongoose.model("above20k", above20kSchema);

export default above20k;


