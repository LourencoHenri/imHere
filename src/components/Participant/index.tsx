import { styles } from "./styles";

import {
	Box,
	Text,
	Icon,
	IconButton,
	MinusIcon,
	useColorModeValue,
	useContrastText,
	Divider,
} from "native-base";

interface ParticipantProps {
	name: string;
	onRemove: () => void;
}

export function Participant({ name, onRemove }: ParticipantProps) {
	const theme = {
		bg: useColorModeValue("white", "black"),
		primary: useColorModeValue("darkText", "lightText"),
		secondary: useColorModeValue("darkText", "lightText"),
		variant: useColorModeValue("outline", "solid"),
		colorContrast: useContrastText(`primary.400`),
		border: useColorModeValue("coolGray.200", "coolGray.800"),
		danger: "danger",
	};

	return (
		<Box
			justifyContent={"space-between"}
			borderColor={theme.border}
			flexDirection={"row"}
			alignItems={"center"}
			borderRadius={"full"}
			borderWidth={1}
			width={"100%"}
			padding={1}
			mb={2}
		>
			<Text fontSize={"md"} pl={2}>
				{name}
			</Text>
			<IconButton
				colorScheme={theme.danger}
				icon={<MinusIcon />}
				borderRadius="full"
				onPress={onRemove}
				variant="solid"
				size={"sm"}
			/>
		</Box>
	);
}
