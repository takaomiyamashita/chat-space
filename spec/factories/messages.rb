FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/UNADJUSTEDNONRAW_thumb_294.jpg")}
    user
    group
  end
end