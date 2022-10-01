import { StyleSheet } from "react-native";

export const localStyles = StyleSheet.create({
	containerFlexRow: {
		display: "flex",
		flexDirection: "row",
	},
	containerBig: {
		display: "flex",
		width: "100%",
	},
	containerLocalInfo: {
		width: "100%",
		paddingLeft: 10,
	},
	containerLocalInfoTitle: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	localInfoTitle: {
		fontWeight: "400",
		fontSize: 36,
	},
	localInfoDistance: {
		fontWeight: "400",
		fontSize: 20,
		paddingTop: 10,
	},
	localInfoActivity: {
		fontWeight: "400",
		fontSize: 16,
	},
	containerInfoReviewAndPrice: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	imageInfoReview: {
		width: 13,
		height: 13,
	},
	infoReviewAndPrice: {
		paddingLeft: 5,
		fontSize: 16,
		fontWeight: "400",
	},
	infoReviewAndPriceHour: {
		paddingLeft: 5,
		fontWeight: "100",
	},
	descriptionContainer: {
		paddingLeft: 10,
	},
	descriptionTitle: {
		fontWeight: "400",
		fontSize: 18,
	},
	descriptionParagraph: {
		fontWeight: "400",
		fontSize: 16,
	},
	containerServices: {
		paddingLeft: 10,

		display: "flex",
		flexDirection: "column",
		flexWrap: "wrap",
		justifyContent: "flex-start",
	},
	servicesTitle: {
		fontSize: 20,
		fontWeight: "400",
	},
	containerServicesOffered: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	servicesOffered: {
		width: "49%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 10,
	},
	servicesOfferedIcons: {
		width: 20,
	},
	servicesOfferedName: {
		width: 110,
		paddingLeft: 10,
	},
	locationContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	locationTitle: {
		fontSize: 20,
		fontWeight: "400",
		paddingBottom: 10,
		paddingLeft: 10,
	},
	locationAdress: {
		paddingLeft: 10,

		fontSize: 16,
		fontWeight: "400",
	},
	scheduleContainer: {
		display: "flex",
		flexDirection: "column",
		paddingLeft: 10,
	},
	scheduleTitle: {
		fontSize: 20,
		fontWeight: "400",
	},
	containerScheduleByDay: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 10,
		paddingTop: 5,
	},
	containerScheduleDay: {
		fontSize: 16,
		fontWeight: "400",
	},
	containerScheduleTime: {
		fontSize: 16,
		fontWeight: "400",
	},
	containerCommunity: {
		width: "100%",
		minHeight: 300,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingLeft: 14,
		color: "#ffffff",
		backgroundColor: "#000000",
	},
	containerCommuinityTitle: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	communityTitleText: {
		fontSize: 25,
		fontWeight: "400",
		color: "#ffffff",
	},
	comunnityTitleLogo: {
		width: 142,
		paddingLeft: 2,
		paddingRight: 2,
	},
	communityDescription: {
		minWidth: 320,
		maxWidth: 370,
		fontSize: 16,
		fontWeight: "400",
		letterSpacing: 0.6,
		color: "#ffffff",
		paddingTop: 15,
	},
	containerCommunityGroups: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	communityGroupTitle: {
		fontSize: 20,
		fontWeight: "400",
		color: "#ffffff",
		paddingTop: 15,
	},
	containerCommunityGroupsLives: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 15,
	},
	communityGroupListAvatars: {
		minWidth: 50,
		display: "flex",
		flexDirection: "row",
	},
	communityGroupImageAvatar: {
		width: 32,
	},
	containerCommunityGroupsLivesInfo: {
		display: "flex",
		flexDirection: "column",
		paddingLeft: 5,
	},
	communityGroupNameGroup: {
		fontSize: 14,
		fontWeight: "400",
		color: "#ffffff",
	},
	communityGroupDetailGroup: {
		fontSize: 14,
		fontWeight: "400",
		color: "#ffffff",
	},
	communityFooter: {
		fontSize: 16,
		fontWeight: "400",
		color: "#ffffff",
		paddingTop: 20,
	},
	imgs: { width: "100%", height: 250 },
	logo: {
		width: "50%",
		height: 55,
	},
});
