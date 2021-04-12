@categories.each do |category|
  json.set! category.id do
  json.partial! "api/categories/category", category: category
  end
end