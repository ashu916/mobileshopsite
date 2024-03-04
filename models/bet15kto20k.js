import mongoose, { Schema } from "mongoose";

const bet15kto20kSchema = new Schema(
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

const bet15kto20k = mongoose.models.bet15kto20k || mongoose.model("bet15kto20k", bet15kto20kSchema);

export default bet15kto20k;


