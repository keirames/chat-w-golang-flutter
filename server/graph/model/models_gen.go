// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Message struct {
	ID        string  `json:"id"`
	Text      string  `json:"text"`
	CreatedAt string  `json:"createdAt"`
	UpdatedAt *string `json:"updatedAt"`
	DeletedAt string  `json:"deletedAt"`
}

type NewRoom struct {
	Title   *string  `json:"title"`
	Members []string `json:"members"`
}

type NewTodo struct {
	Text   string `json:"text"`
	UserID string `json:"userId"`
}

type Room struct {
	ID        string  `json:"id"`
	Title     *string `json:"title"`
	CreatedAt string  `json:"createdAt"`
	UpdatedAt *string `json:"updatedAt"`
	DeletedAt string  `json:"deletedAt"`
}

type Todo struct {
	ID   string `json:"id"`
	Text string `json:"text"`
	Done bool   `json:"done"`
	User *User  `json:"user"`
}

type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
