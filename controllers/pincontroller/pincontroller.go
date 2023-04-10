package pincontroller

import (
	"accessibilitymap/services/pinservice"
	"accessibilitymap/types"
	"net/http"

	"github.com/gin-gonic/gin"
)

type IGetPinsRequest struct {
	SearchCriteria types.IPinSearchCriteria `json:"searchCriteria"`
}

type IGetPinsResponse struct {
	Pins []types.IPin `json:"pins"`
}

func GetPins(context *gin.Context) {
	var request IGetPinsRequest
	err := context.BindJSON(&request)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	pins, err := pinservice.GetPinsByCriteria(request.SearchCriteria)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := IGetPinsResponse{pins}
	context.JSON(http.StatusOK, response)
}

type IGetPinResponse struct {
	Pin types.IPin `json:"pin"`
}

func GetPinById(context *gin.Context) {

	var pinId = context.Param("id")

	pin, err := pinservice.GetPinById(pinId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := IGetPinResponse{*pin}
	context.JSON(http.StatusOK, response)
}

type IAddPinRequest struct {
	Pin types.IPin `json:"pin"`
}

type IAddPinResponse struct {
	Pin types.IPin `json:"pin"`
}

func AddPin(context *gin.Context) {
	var request IAddPinRequest
	err := context.BindJSON(&request)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	pin, err := pinservice.AddPin(request.Pin)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := IAddPinResponse{*pin}
	context.JSON(http.StatusOK, response)
}

type IGetPinByLocationRequest struct {
	Location types.IGeoCode `json:"location"`
	Radius   float64        `json:"radius"` //meters
}

type IGetPinByLocationResponse struct {
	Pins []types.IPin `json:"pins"`
}

func GetPinByLocation(context *gin.Context) {
	var request IGetPinByLocationRequest
	err := context.BindJSON(&request)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	pins, err := pinservice.GetPinByLocation(request.Location, request.Radius)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := IGetPinByLocationResponse{pins}
	context.JSON(http.StatusOK, response)
}

func DeletePin(context *gin.Context) {
	var pinId = context.Param("id")

	err := pinservice.DeletePin(pinId)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	context.JSON(http.StatusOK, gin.H{})
}

type IUpdatePinResponse struct {
	NewPin types.IPin `json:"pin"`
}

func UpdatePin(context *gin.Context) {
	var pinId = context.Param("id")

	var request IUpdatePinResponse
	err := context.BindJSON(&request)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	pin, err := pinservice.UpdatePin(pinId, request.NewPin)
	if err != nil {
		context.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	response := IUpdatePinResponse{*pin}
	context.JSON(http.StatusOK, response)
}
