import {
	Button,
	Box,
	useColorModeValue,
	useContrastText,
	Switch,
	useAccessibleColors,
	Text,
	Input,
	FormControl,
	Menu,
	Modal,
	IconButton,
	MinusIcon,
	HamburgerIcon,
	MoonIcon,
	SunIcon,
	HStack,
	Stack,
	VStack,
	Divider,
} from "native-base";
import { Participant } from "../../components/Participant";
import { useTranslation } from "react-i18next";
import { useColorMode } from "native-base";
import { styles } from "./styles";
import { useState } from "react";
import { Formik } from "formik";
import i18n from "../../i18n";
import {
	TouchableOpacity,
	TextInput,
	FlatList,
	Image,
	Alert,
} from "react-native";

export function Home() {
	const { t } = useTranslation();

	const [participants, setParticipants] = useState<string[]>([
		"Henrique Lourenço",
		"Eduardo Lourenço",
		"Gustavo Lourenço",
		"João Silva",
		"Maria Santos",
		"Pedro Almeida",
		"Ana Oliveira",
		"Luiz Pereira",
		"Carla Souza",
		"Mário Fernandes",
		"Isabel Costa",
		"Rafael Rodrigues",
		"Juliana Lima",
		"Fernando Gomes",
		"Camila Ribeiro",
		"Lucas Castro",
		"Renata Martins",
		"Gustavo Pereira",
		"Sofia Carvalho",
		"André Ferreira",
		"Lúcia Oliveira",
		"Eduardo Silva",
		"Bianca Santos",
		"Antônio Alves",
		"Cristina Nunes",
		"Ricardo Torres",
		"Amanda Cardoso",
		"Paulo Miranda",
		"Cláudia Barbosa",
		"Daniel Sousa",
		"Tatiana Mendes",
		"Marcos Lima",
		"Patrícia Ferreira",
	]);

	function handleParticipantAdd(name: string) {
		const trimmedName = name.trim();

		if (participants.includes(trimmedName)) {
			return Alert.alert(t(`form.add`), t(`form.warning.add`));
		}

		setParticipants((prevState) => [trimmedName, ...prevState]);
	}

	function handleParticipantRemove(name: string) {
		Alert.alert(
			t(`form.remove.title`),
			t(`form.remove.text`, { participantName: name }),
			[
				{
					text: t(`form.remove.no`),
				},
				{
					text: t(`form.remove.yes`),
					style: "destructive",
					onPress: () =>
						setParticipants((prevState) =>
							prevState.filter((participant) => participant !== name)
						),
				},
			]
		);
	}

	function handleChangeLanguage(language: string) {
		i18n.changeLanguage(language);
	}

	const { toggleColorMode } = useColorMode();

	const theme = {
		currentTheme: useColorModeValue("light", "dark"),
		bg: useColorModeValue("white", "black"),
		primary: useColorModeValue("darkText", "lightText"),
		secondary: useColorModeValue("darkText", "lightText"),
		variant: useColorModeValue("outline", "solid"),
		colorContrast: useContrastText(`primary.400`),
		border: useColorModeValue("coolGray.200", "coolGray.800"),
		danger: "danger",
	};

	const [showModal, setShowModal] = useState(false);

	function handleOpenModal() {
		setShowModal(true);
	}

	return (
		<Box bg={theme.bg} style={styles.container}>
			<Box mb={4}>
				<Box flexDirection={"row"} justifyContent={"space-between"}>
					<Text fontSize="4xl" fontWeight="bold" textAlign="center" pt={6}>
						Moby Dick
					</Text>
					<IconButton
						icon={<HamburgerIcon />}
						borderRadius="full"
						onPress={handleOpenModal}
						size={"sm"}
					/>
				</Box>
				<Box alignItems={"center"}>
					<Text textAlign={"center"} fontSize={"sm"} width={"80%"}>
						Av. Vicente de Carvalho, 30 - Boqueirão, Santos - SP
					</Text>
				</Box>
			</Box>

			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				<Modal.Content>
					<Modal.CloseButton />
					<Modal.Header>{t(`modal.title`)}</Modal.Header>
					<Modal.Body>
						<Box>
							<Box
								flexDirection={"row"}
								alignItems={"center"}
								justifyContent={"space-between"}
							>
								<Text textAlign={"center"} fontSize="lg">
									{t(`modal.language`)}
								</Text>
								<Box
									style={{
										display: "flex",
										flexDirection: "row",
										gap: 16,
										justifyContent: "center",
									}}
								>
									<TouchableOpacity onPress={() => handleChangeLanguage("pt")}>
										<Image
											style={{ width: 24, height: 24 }}
											source={require("../../../assets/languages/pt.png")}
										/>
									</TouchableOpacity>
									<TouchableOpacity onPress={() => handleChangeLanguage("en")}>
										<Image
											style={{ width: 24, height: 24 }}
											source={require("../../../assets/languages/en.png")}
										/>
									</TouchableOpacity>
								</Box>
							</Box>

							<Box
								flexDirection={"row"}
								alignItems={"center"}
								justifyContent={"space-between"}
							>
								<Text textAlign={"center"} fontSize="lg">
									{t(`modal.colorMode`)}
								</Text>

								<IconButton
									icon={
										theme.currentTheme === "light" ? (
											<MoonIcon size={8} />
										) : (
											<SunIcon size={8} />
										)
									}
									borderRadius="full"
									onPress={toggleColorMode}
								/>
							</Box>
						</Box>
					</Modal.Body>
					<Modal.Footer>
						<Button.Group>
							<Button
								onPress={() => {
									setShowModal(false);
								}}
							>
								Fechar
							</Button>
						</Button.Group>
					</Modal.Footer>
				</Modal.Content>
			</Modal>

			<Formik
				initialValues={{ name: "" }}
				onSubmit={(values) => {
					handleParticipantAdd(values.name);
				}}
			>
				{({ handleChange, handleSubmit, values }) => (
					<FormControl mb={8}>
						<Input
							width={"100%"}
							size={"md"}
							id="name"
							borderRadius={"full"}
							placeholder={t(`form.placeholder.name`)}
							onChangeText={handleChange("name")}
							value={values.name}
							mb={2}
						/>
						<Button
							onPress={handleSubmit}
							fontSize={"md"}
							borderRadius={"full"}
							colorScheme="lightBlue"
						>
							{t(`form.submitButton`)}
						</Button>
					</FormControl>
				)}
			</Formik>

			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Participant
						key={item}
						name={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>{t(`form.warning.tip`)}</Text>
				)}
			/>
		</Box>
	);
}
