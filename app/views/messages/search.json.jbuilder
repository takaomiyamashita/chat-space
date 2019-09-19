json.array! @products do |product|
  json.id product.id
  json.title product.title
  json.image product.image.url
  json.detail product.detail
end