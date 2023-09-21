import { Schema, model, models } from 'mongoose'

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'El titulo es requerido'],
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: [true, 'La descripcion es requerida'],
      trim: true
    }
  },
  {
    timestamps: true
  }
)

export default models.Article || model('Article', articleSchema)
