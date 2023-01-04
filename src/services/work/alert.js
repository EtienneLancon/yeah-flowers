export class AlertService
{
    show(alert)
    {
        this.ref.showAlert(alert.type, alert.message, alert?.header, alert?.iconSize, alert?.iconStyle)
    }

    success(message = 'Message', header = 'Success')
    {
        this.show({header, message, type: 'success'});
    }

    info(message = 'Message', header = 'Info')
    {
        this.show({header, message, type: 'info'});
    }

    error(message = 'Message', header = 'Error')
    {
        this.show({header, message, type: 'error'});
    }

    warning(message = 'Message', header = 'Warning')
    {
        this.show({header, message, type: 'warning'});
    }
}