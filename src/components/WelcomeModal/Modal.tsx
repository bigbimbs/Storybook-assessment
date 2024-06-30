import { forwardRef, ReactNode, useEffect, useState } from "react";
import { Modal, View, StyleSheet, ModalProps } from "react-native";

type CustomModalProps = {
  fullscreen?: boolean;
  closable?: boolean;
  showModal: boolean;
  children: ReactNode;
} & ModalProps;

export const CustomModal = forwardRef<Modal, CustomModalProps>(
  ({ closable = true, fullscreen, showModal, children, ...restProps }, ref) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const closeModal = () => {
      if (closable) setModalVisible(false);
    };

    useEffect(() => {
      setModalVisible(showModal);
    }, [showModal]);

    return (
      <View style={styles.container}>
        <Modal
          ref={ref}
          animationType="slide"
          transparent={fullscreen ? false : true}
          {...restProps}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View
            style={[
              fullscreen ? styles.modalWithoutOverlay : styles.modalOverlay,
            ]}
          >
            <View style={styles.modalContent}>{children}</View>
          </View>
        </Modal>
      </View>
    );
  }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalWithoutOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    minWidth: 300,
    // padding: 20,
    // backgroundColor: 'white',
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});
