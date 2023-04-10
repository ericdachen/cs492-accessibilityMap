package types

type IPinSearchCriteria struct {
	Name       string   `json:"name"`
	StarRating int      `json:"starRating"`
	Traits     []ITrait `json:"traits"`
}
