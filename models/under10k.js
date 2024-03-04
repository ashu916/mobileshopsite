import mongoose, { Schema } from "mongoose";

const under10kSchema = new Schema(
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

const under10k = mongoose.models.under10k || mongoose.model("under10k", under10kSchema);

export default under10k;


