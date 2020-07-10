// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.6.1
// source: quizapi.proto

package quizapipb

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type SubmitQuizRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        uint32                      `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Responses []*SubmitQuizRequest_Answer `protobuf:"bytes,2,rep,name=responses,proto3" json:"responses,omitempty"`
}

func (x *SubmitQuizRequest) Reset() {
	*x = SubmitQuizRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitQuizRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitQuizRequest) ProtoMessage() {}

func (x *SubmitQuizRequest) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitQuizRequest.ProtoReflect.Descriptor instead.
func (*SubmitQuizRequest) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{0}
}

func (x *SubmitQuizRequest) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *SubmitQuizRequest) GetResponses() []*SubmitQuizRequest_Answer {
	if x != nil {
		return x.Responses
	}
	return nil
}

type SubmitQuizResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *SubmitQuizResponse) Reset() {
	*x = SubmitQuizResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitQuizResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitQuizResponse) ProtoMessage() {}

func (x *SubmitQuizResponse) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitQuizResponse.ProtoReflect.Descriptor instead.
func (*SubmitQuizResponse) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{1}
}

type AdminCreateQuizRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *AdminCreateQuizRequest) Reset() {
	*x = AdminCreateQuizRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AdminCreateQuizRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AdminCreateQuizRequest) ProtoMessage() {}

func (x *AdminCreateQuizRequest) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AdminCreateQuizRequest.ProtoReflect.Descriptor instead.
func (*AdminCreateQuizRequest) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{2}
}

func (x *AdminCreateQuizRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type AdminCreateQuizResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *AdminCreateQuizResponse) Reset() {
	*x = AdminCreateQuizResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AdminCreateQuizResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AdminCreateQuizResponse) ProtoMessage() {}

func (x *AdminCreateQuizResponse) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AdminCreateQuizResponse.ProtoReflect.Descriptor instead.
func (*AdminCreateQuizResponse) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{3}
}

func (x *AdminCreateQuizResponse) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type AdminAddQuestionToQuizRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	QuizId uint32 `protobuf:"varint,1,opt,name=quiz_id,json=quizId,proto3" json:"quiz_id,omitempty"`
	Text   string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *AdminAddQuestionToQuizRequest) Reset() {
	*x = AdminAddQuestionToQuizRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AdminAddQuestionToQuizRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AdminAddQuestionToQuizRequest) ProtoMessage() {}

func (x *AdminAddQuestionToQuizRequest) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AdminAddQuestionToQuizRequest.ProtoReflect.Descriptor instead.
func (*AdminAddQuestionToQuizRequest) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{4}
}

func (x *AdminAddQuestionToQuizRequest) GetQuizId() uint32 {
	if x != nil {
		return x.QuizId
	}
	return 0
}

func (x *AdminAddQuestionToQuizRequest) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

type AdminAddQuestionToQuizResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result *Question `protobuf:"bytes,1,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *AdminAddQuestionToQuizResponse) Reset() {
	*x = AdminAddQuestionToQuizResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AdminAddQuestionToQuizResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AdminAddQuestionToQuizResponse) ProtoMessage() {}

func (x *AdminAddQuestionToQuizResponse) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AdminAddQuestionToQuizResponse.ProtoReflect.Descriptor instead.
func (*AdminAddQuestionToQuizResponse) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{5}
}

func (x *AdminAddQuestionToQuizResponse) GetResult() *Question {
	if x != nil {
		return x.Result
	}
	return nil
}

type ListQuizesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListQuizesRequest) Reset() {
	*x = ListQuizesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListQuizesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListQuizesRequest) ProtoMessage() {}

func (x *ListQuizesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListQuizesRequest.ProtoReflect.Descriptor instead.
func (*ListQuizesRequest) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{6}
}

type ListQuizesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Quizes []*ListQuizesResponse_Entry `protobuf:"bytes,1,rep,name=quizes,proto3" json:"quizes,omitempty"`
}

func (x *ListQuizesResponse) Reset() {
	*x = ListQuizesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListQuizesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListQuizesResponse) ProtoMessage() {}

func (x *ListQuizesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListQuizesResponse.ProtoReflect.Descriptor instead.
func (*ListQuizesResponse) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{7}
}

func (x *ListQuizesResponse) GetQuizes() []*ListQuizesResponse_Entry {
	if x != nil {
		return x.Quizes
	}
	return nil
}

type GetQuizRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetQuizRequest) Reset() {
	*x = GetQuizRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetQuizRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetQuizRequest) ProtoMessage() {}

func (x *GetQuizRequest) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetQuizRequest.ProtoReflect.Descriptor instead.
func (*GetQuizRequest) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{8}
}

func (x *GetQuizRequest) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetQuizResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Questions []*Question `protobuf:"bytes,1,rep,name=questions,proto3" json:"questions,omitempty"`
}

func (x *GetQuizResponse) Reset() {
	*x = GetQuizResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetQuizResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetQuizResponse) ProtoMessage() {}

func (x *GetQuizResponse) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetQuizResponse.ProtoReflect.Descriptor instead.
func (*GetQuizResponse) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{9}
}

func (x *GetQuizResponse) GetQuestions() []*Question {
	if x != nil {
		return x.Questions
	}
	return nil
}

type Question struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   uint64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Text string `protobuf:"bytes,2,opt,name=text,proto3" json:"text,omitempty"`
}

func (x *Question) Reset() {
	*x = Question{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[10]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Question) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Question) ProtoMessage() {}

func (x *Question) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[10]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Question.ProtoReflect.Descriptor instead.
func (*Question) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{10}
}

func (x *Question) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Question) GetText() string {
	if x != nil {
		return x.Text
	}
	return ""
}

type SubmitQuizRequest_Answer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	QuestionId uint32 `protobuf:"varint,1,opt,name=question_id,json=questionId,proto3" json:"question_id,omitempty"`
	Response   string `protobuf:"bytes,2,opt,name=response,proto3" json:"response,omitempty"`
}

func (x *SubmitQuizRequest_Answer) Reset() {
	*x = SubmitQuizRequest_Answer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[11]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SubmitQuizRequest_Answer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SubmitQuizRequest_Answer) ProtoMessage() {}

func (x *SubmitQuizRequest_Answer) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[11]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SubmitQuizRequest_Answer.ProtoReflect.Descriptor instead.
func (*SubmitQuizRequest_Answer) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{0, 0}
}

func (x *SubmitQuizRequest_Answer) GetQuestionId() uint32 {
	if x != nil {
		return x.QuestionId
	}
	return 0
}

func (x *SubmitQuizRequest_Answer) GetResponse() string {
	if x != nil {
		return x.Response
	}
	return ""
}

type ListQuizesResponse_Entry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   uint32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *ListQuizesResponse_Entry) Reset() {
	*x = ListQuizesResponse_Entry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_quizapi_proto_msgTypes[12]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListQuizesResponse_Entry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListQuizesResponse_Entry) ProtoMessage() {}

func (x *ListQuizesResponse_Entry) ProtoReflect() protoreflect.Message {
	mi := &file_quizapi_proto_msgTypes[12]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListQuizesResponse_Entry.ProtoReflect.Descriptor instead.
func (*ListQuizesResponse_Entry) Descriptor() ([]byte, []int) {
	return file_quizapi_proto_rawDescGZIP(), []int{7, 0}
}

func (x *ListQuizesResponse_Entry) GetId() uint32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ListQuizesResponse_Entry) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

var File_quizapi_proto protoreflect.FileDescriptor

var file_quizapi_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x71, 0x75, 0x69, 0x7a, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x0b, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x22, 0xaf, 0x01, 0x0a,
	0x11, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02,
	0x69, 0x64, 0x12, 0x43, 0x0a, 0x09, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x41, 0x6e, 0x73, 0x77, 0x65, 0x72, 0x52, 0x09, 0x72, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x73, 0x1a, 0x45, 0x0a, 0x06, 0x41, 0x6e, 0x73, 0x77, 0x65,
	0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0a, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e,
	0x49, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x14,
	0x0a, 0x12, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x2c, 0x0a, 0x16, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x29, 0x0a, 0x17, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64, 0x22, 0x4c, 0x0a,
	0x1d, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x41, 0x64, 0x64, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f,
	0x6e, 0x54, 0x6f, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17,
	0x0a, 0x07, 0x71, 0x75, 0x69, 0x7a, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x06, 0x71, 0x75, 0x69, 0x7a, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x22, 0x4f, 0x0a, 0x1e, 0x41,
	0x64, 0x6d, 0x69, 0x6e, 0x41, 0x64, 0x64, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x6f, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2d, 0x0a,
	0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x15, 0x2e,
	0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x51, 0x75, 0x65, 0x73,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x22, 0x13, 0x0a, 0x11,
	0x4c, 0x69, 0x73, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x22, 0x80, 0x01, 0x0a, 0x12, 0x4c, 0x69, 0x73, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x65, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3d, 0x0a, 0x06, 0x71, 0x75, 0x69, 0x7a,
	0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x65,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52,
	0x06, 0x71, 0x75, 0x69, 0x7a, 0x65, 0x73, 0x1a, 0x2b, 0x0a, 0x05, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x22, 0x20, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x22, 0x46, 0x0a, 0x0f, 0x47, 0x65, 0x74, 0x51, 0x75, 0x69,
	0x7a, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a, 0x09, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x15, 0x2e, 0x71,
	0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x51, 0x75, 0x65, 0x73, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x09, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x22, 0x2e,
	0x0a, 0x08, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x65,
	0x78, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x32, 0xcc,
	0x03, 0x0a, 0x0b, 0x51, 0x75, 0x69, 0x7a, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4f,
	0x0a, 0x0a, 0x4c, 0x69, 0x73, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x65, 0x73, 0x12, 0x1e, 0x2e, 0x71,
	0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x51,
	0x75, 0x69, 0x7a, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x71,
	0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x51,
	0x75, 0x69, 0x7a, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x46, 0x0a, 0x07, 0x47, 0x65, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x12, 0x1b, 0x2e, 0x71, 0x75, 0x69,
	0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x51, 0x75, 0x69, 0x7a,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4f, 0x0a, 0x0a, 0x53, 0x75, 0x62, 0x6d, 0x69,
	0x74, 0x51, 0x75, 0x69, 0x7a, 0x12, 0x1e, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x53, 0x75, 0x62, 0x6d, 0x69, 0x74, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5e, 0x0a, 0x0f, 0x41, 0x64, 0x6d, 0x69,
	0x6e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75, 0x69, 0x7a, 0x12, 0x23, 0x2e, 0x71, 0x75,
	0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x24, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x41,
	0x64, 0x6d, 0x69, 0x6e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x73, 0x0a, 0x16, 0x41, 0x64, 0x6d, 0x69,
	0x6e, 0x41, 0x64, 0x64, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x6f, 0x51, 0x75,
	0x69, 0x7a, 0x12, 0x2a, 0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x41, 0x64, 0x64, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f,
	0x6e, 0x54, 0x6f, 0x51, 0x75, 0x69, 0x7a, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2b,
	0x2e, 0x71, 0x75, 0x69, 0x7a, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x41, 0x64, 0x6d,
	0x69, 0x6e, 0x41, 0x64, 0x64, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x6f, 0x51,
	0x75, 0x69, 0x7a, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x0b, 0x5a,
	0x09, 0x71, 0x75, 0x69, 0x7a, 0x61, 0x70, 0x69, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_quizapi_proto_rawDescOnce sync.Once
	file_quizapi_proto_rawDescData = file_quizapi_proto_rawDesc
)

func file_quizapi_proto_rawDescGZIP() []byte {
	file_quizapi_proto_rawDescOnce.Do(func() {
		file_quizapi_proto_rawDescData = protoimpl.X.CompressGZIP(file_quizapi_proto_rawDescData)
	})
	return file_quizapi_proto_rawDescData
}

var file_quizapi_proto_msgTypes = make([]protoimpl.MessageInfo, 13)
var file_quizapi_proto_goTypes = []interface{}{
	(*SubmitQuizRequest)(nil),              // 0: quizservice.SubmitQuizRequest
	(*SubmitQuizResponse)(nil),             // 1: quizservice.SubmitQuizResponse
	(*AdminCreateQuizRequest)(nil),         // 2: quizservice.AdminCreateQuizRequest
	(*AdminCreateQuizResponse)(nil),        // 3: quizservice.AdminCreateQuizResponse
	(*AdminAddQuestionToQuizRequest)(nil),  // 4: quizservice.AdminAddQuestionToQuizRequest
	(*AdminAddQuestionToQuizResponse)(nil), // 5: quizservice.AdminAddQuestionToQuizResponse
	(*ListQuizesRequest)(nil),              // 6: quizservice.ListQuizesRequest
	(*ListQuizesResponse)(nil),             // 7: quizservice.ListQuizesResponse
	(*GetQuizRequest)(nil),                 // 8: quizservice.GetQuizRequest
	(*GetQuizResponse)(nil),                // 9: quizservice.GetQuizResponse
	(*Question)(nil),                       // 10: quizservice.Question
	(*SubmitQuizRequest_Answer)(nil),       // 11: quizservice.SubmitQuizRequest.Answer
	(*ListQuizesResponse_Entry)(nil),       // 12: quizservice.ListQuizesResponse.Entry
}
var file_quizapi_proto_depIdxs = []int32{
	11, // 0: quizservice.SubmitQuizRequest.responses:type_name -> quizservice.SubmitQuizRequest.Answer
	10, // 1: quizservice.AdminAddQuestionToQuizResponse.result:type_name -> quizservice.Question
	12, // 2: quizservice.ListQuizesResponse.quizes:type_name -> quizservice.ListQuizesResponse.Entry
	10, // 3: quizservice.GetQuizResponse.questions:type_name -> quizservice.Question
	6,  // 4: quizservice.QuizService.ListQuizes:input_type -> quizservice.ListQuizesRequest
	8,  // 5: quizservice.QuizService.GetQuiz:input_type -> quizservice.GetQuizRequest
	0,  // 6: quizservice.QuizService.SubmitQuiz:input_type -> quizservice.SubmitQuizRequest
	2,  // 7: quizservice.QuizService.AdminCreateQuiz:input_type -> quizservice.AdminCreateQuizRequest
	4,  // 8: quizservice.QuizService.AdminAddQuestionToQuiz:input_type -> quizservice.AdminAddQuestionToQuizRequest
	7,  // 9: quizservice.QuizService.ListQuizes:output_type -> quizservice.ListQuizesResponse
	9,  // 10: quizservice.QuizService.GetQuiz:output_type -> quizservice.GetQuizResponse
	1,  // 11: quizservice.QuizService.SubmitQuiz:output_type -> quizservice.SubmitQuizResponse
	3,  // 12: quizservice.QuizService.AdminCreateQuiz:output_type -> quizservice.AdminCreateQuizResponse
	5,  // 13: quizservice.QuizService.AdminAddQuestionToQuiz:output_type -> quizservice.AdminAddQuestionToQuizResponse
	9,  // [9:14] is the sub-list for method output_type
	4,  // [4:9] is the sub-list for method input_type
	4,  // [4:4] is the sub-list for extension type_name
	4,  // [4:4] is the sub-list for extension extendee
	0,  // [0:4] is the sub-list for field type_name
}

func init() { file_quizapi_proto_init() }
func file_quizapi_proto_init() {
	if File_quizapi_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_quizapi_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitQuizRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitQuizResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AdminCreateQuizRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AdminCreateQuizResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AdminAddQuestionToQuizRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AdminAddQuestionToQuizResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListQuizesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListQuizesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetQuizRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetQuizResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[10].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Question); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[11].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SubmitQuizRequest_Answer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_quizapi_proto_msgTypes[12].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListQuizesResponse_Entry); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_quizapi_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   13,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_quizapi_proto_goTypes,
		DependencyIndexes: file_quizapi_proto_depIdxs,
		MessageInfos:      file_quizapi_proto_msgTypes,
	}.Build()
	File_quizapi_proto = out.File
	file_quizapi_proto_rawDesc = nil
	file_quizapi_proto_goTypes = nil
	file_quizapi_proto_depIdxs = nil
}
