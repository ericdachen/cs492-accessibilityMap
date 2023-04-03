package pincontroller

import (
	"accessibilitymap/services/pinservice"
	"accessibilitymap/types"
	"net/http"

	"github.com/gin-gonic/gin"
)

type IGetPinResponse struct {
	Pin types.IPin `json:"pin"`
}

func GetPin(context *gin.Context) {

	var pinId = context.Param("id")

	pin, err := pinservice.GetPin(pinId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := IGetPinResponse{*pin}
	context.JSON(http.StatusOK, response)
}
